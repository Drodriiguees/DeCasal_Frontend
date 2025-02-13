import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { AuthService } from 'src/app/components/auth/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent {

    email:string;
    senha!: string;

    constructor(
        public layoutService: LayoutService,
        private authService: AuthService,
        private router: Router,
        private messageService: MessageService
      ) {}


    logar(){
        this.authService.login(this.email,this.senha).subscribe(
            ()=>{
                this.router.navigate(['/despesa/create']);
                },
                (Error:any) => {
                    this.messageService.add({key:'tst', severity:'error', summary:'Erro no Login', detail:'Verifique suas credenciais.'})
                }
                );
            }



}
