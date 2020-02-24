import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PessoaService {
  private baseUrl = 'http://localhost:8080/api/v1';
  constructor(private http: HttpClient) { }

  getPessoa(cpf: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/cpf/${cpf}`);
  }

  createPessoa(pessoa: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/novo`, pessoa);
  }

  updatePessoa(pessoa: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update`, pessoa);
  }

  deletePessoa(cpf: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleta/${cpf}`);
  }

  getPessoaList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/list`);
  }
}
