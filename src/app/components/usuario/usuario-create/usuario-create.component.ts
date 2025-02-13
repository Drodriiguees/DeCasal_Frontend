import { LayoutService } from './../../../layout/service/app.layout.service';
import { Component } from '@angular/core';
import { Usuario } from '../usuario.model';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrl: './usuario-create.component.scss'
  
})
export class UsuarioCreateComponent {

  usuario: Usuario = {
    nome: '',
    email: '',
    senha: '',
    role: 'MARIDO',
  }

constructor(
  private usuarioservice: UsuarioService,
  public layoutservice: LayoutService,
  private router: Router,
  private messageservice: MessageService
){}

CriarUsuario():void{
  this.usuarioservice.criarUsuario(this.usuario).subscribe(()=> {
    this.messageservice.add({ key: 'tst' ,severity: 'success', summary: 'success', detail: 'Usuario cadastrado com sucesso' });
    this.router.navigate(["/auth/login"]);
  });
}











}

