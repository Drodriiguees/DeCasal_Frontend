import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, tap } from "rxjs";
import { Usuario } from "src/app/components/usuario/usuario.model";
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private url = `${environment.baseUrlBackend}/auth/login`;

    constructor(
        private http: HttpClient,
        private router: Router) { }

        login(email: string, senha: string): Observable<any> {
            return this.http.post(this.url, { email, senha }, {
                headers: { 'Content-Type': 'application/json' } 
            }).pipe(
                tap((response: any) => {
                    if (response.token) {
                        this.setToken(response.token);
                        this.setUser(response.usuario);
                    }
                })
            );
        }
        

    private setToken(token: string): void {
        localStorage.setItem('token', token);
    }

    private setUser(user: Usuario): void {
        localStorage.setItem('user', JSON.stringify(user));
    }

    logout(): void {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.router.navigate(['/login']); 
    }

    isAuthenticated(): boolean {
        return !!localStorage.getItem('token');
    }

    getToken(): string | null {
        return localStorage.getItem('token');
    }

    getUser(): Usuario | null {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    }
}
