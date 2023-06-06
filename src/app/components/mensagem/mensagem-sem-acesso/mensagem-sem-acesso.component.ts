import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mensagem-sem-acesso',
  templateUrl: './mensagem-sem-acesso.component.html',
  styleUrls: ['./mensagem-sem-acesso.component.css']
})
export class MensagemSemAcessoComponent {
  constructor(private router:Router,){}


logar():void{
  this.router.navigate(['login/login-admin']);
  
}

}


