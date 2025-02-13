import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Categoria } from './categoria.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaServiceService {

  baseUrl= environment.baseUrlBackend+'/categoria'

  constructor(private http: HttpClient) { }

  criarCategoria(categoria: Categoria): Observable<Categoria>{
    const url = `${this.baseUrl}/cadastrar`;
    return this.http.post<Categoria>(url,categoria)

  }


  deletar(id:number):Observable<Categoria>{
    const url = `${this.baseUrl}/{id}`;
    return this.http.delete<Categoria>(url)
  }

  listarCategoria(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.baseUrl)

  }
}
