import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Usuario } from 'src/app/models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioAutenticacaoService {

  private isAtenticado:boolean;
  constructor(private httpClient:HttpClient) { 

    this.isAtenticado = false;
  }

  autenticar(usuario:Usuario):Observable<boolean>{
    // const endpoint = '';
    // this.httpClient.get<boolean>(endpoint)
   return this.mockAutenticarAPI(usuario)
    .pipe(tap(retorno =>this.isAtenticado = retorno))   
    
  }

  private mockAutenticarAPI(usuario:Usuario):Observable<boolean>{
    
    if (usuario.Login == 'a' && usuario.Senha == 'b')
      return of(true)
    
    return of(false); 

  }

  get IsAutenticado():boolean{
    return this.isAtenticado

  }

}
