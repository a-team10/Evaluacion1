import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {
  ingresado = false;
  existe = true;
  Usuarios = [];
  password = "";
  constructor(
    private usuarioService: UsuarioService,
    private router : Router
    ) { }

  ngOnInit() {
  }

  recuperar(nom: HTMLInputElement){
    const usuario = nom.value;
    this.Usuarios = this.usuarioService.getUsuarios();
    for (let i of this.Usuarios){
      if (usuario == i.usuario){
        this.ingresado = true;
        this.password = i.password;
        this.existe = true;
        break;
      }
    }
    if (this.ingresado === false){
      this.existe = false;
    }
//  ⇧ ⇧ Variable para reenviarlos datos solicitado por el usuario  
  }
  volver(){
    this.router.navigate(['/ingreso'])
  }
// ⇧ ⇧ Variable para volver a la pagina principal ⇧ ⇧

}


