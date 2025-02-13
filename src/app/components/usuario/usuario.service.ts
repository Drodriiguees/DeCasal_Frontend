import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Usuario } from "./usuario.model";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {

  baseUrl = environment.baseUrlBackend + '/auth/cadastrar';

  constructor(private http: HttpClient) {}

  criarUsuario(usuario: Usuario): Observable<Usuario> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<Usuario>(this.baseUrl, usuario, { headers, withCredentials: true });
  }
}
