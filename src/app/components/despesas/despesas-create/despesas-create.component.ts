import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-despesas-create',
  templateUrl: './despesas-create.component.html',
  styleUrl: './despesas-create.component.scss'
})
export class DespesasCreateComponent  implements OnInit{
  items: any[] = []


  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-home', routerLink: ['/'] },
      { label: 'Sobre', icon: 'pi pi-info', routerLink: ['/about'] },
      { label: 'Contato', icon: 'pi pi-envelope', routerLink: ['/contact'] }
        ];
  }

  categorias = [
    { label: 'Alimentação', value: 'alimentacao' },
    { label: 'Transporte', value: 'transporte' },
    { label: 'Lazer', value: 'lazer' },
    { label: 'Outros', value: 'outros' }
];

categoriaSelecionada: string;


}
