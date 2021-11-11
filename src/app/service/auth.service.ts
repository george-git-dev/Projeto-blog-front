import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CredenciaisDTO } from '../model/CredenciaisDTO';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  entrar(credenciais: CredenciaisDTO): Observable<CredenciaisDTO> {
    return this.http.put<CredenciaisDTO>('https://blogpessoal34.herokuapp.com/api/v1/usuario/credenciais', credenciais)
  }

  cadastrar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>('https://blogpessoal34.herokuapp.com/api/v1/usuario/salvar', usuario)
  }
}