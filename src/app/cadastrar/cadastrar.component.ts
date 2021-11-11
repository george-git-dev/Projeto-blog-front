import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: Usuario = new Usuario();
  tipoUsuario: string
  confirmaSenha: string
  authService: any;

  constructor(
    private auth: AuthService,
    private router: Router

  ) { }

  ngOnInit() {
    window.scroll(0, 0)
  }


  tipoUser(event: any) {
    this.tipoUsuario = event.target.value
  }

  confirmSenha(event: any) {
    this.confirmaSenha = event.target.value
  }

  cadastrar() {
    this.usuario.tipo = this.tipoUsuario

    if (this.usuario.senha != this.confirmaSenha) {
      alert('As senhas estão incorretas.')
    } else {
      console.log(this.usuario)
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp;
        this.router.navigate(['/entrar']);
        alert('Cadastro realizado com sucesso.')
      })

    }
  }

}