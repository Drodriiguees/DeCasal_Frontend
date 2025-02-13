import { ChangeDetectorRef, Component, EventEmitter, Output } from '@angular/core';
import { CategoriaServiceService } from '../categoria.service';
import { MessageService } from 'primeng/api';
import { Categoria } from '../categoria.model';

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  styleUrl: './categoria-create.component.scss'
})
export class CategoriaCreateComponent {

  categoria: Categoria = { nome: '' };
  submitted = false; 

  constructor(
    private categoriaService: CategoriaServiceService,
    private mensagemService: MessageService,


  ) {}

  criarCategoria(): void {
    this.submitted = true; 

    if (!this.categoria.nome.trim()) {
      this.mensagemService.add({
        key: 'tst',
        severity: 'error',
        summary: 'Erro',
        detail: 'O nome da categoria é obrigatório!'
      });
      return;
    }

    this.categoriaService.criarCategoria(this.categoria).subscribe(
      () => {
        this.mensagemService.add({
          key: 'tst',
          severity: 'success',
          summary: 'Sucesso',
          detail: 'Categoria cadastrada com sucesso'
        });

        this.hideDialog();
        this.submitted = false; 
        this.categoria = { nome: '' }; 

      },
      () => {
        this.mensagemService.add({
          key: 'tst',
          severity: 'error',
          summary: 'Erro',
          detail: 'Falha ao cadastrar a categoria'
        });
      }
    );
  }

  hideDialog() {
    this.submitted = false;
  }
}
