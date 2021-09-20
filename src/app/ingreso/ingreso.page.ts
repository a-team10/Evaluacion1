import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingreso',
  templateUrl: 'ingreso.page.html',
  styleUrls: ['ingreso.page.scss'],
})
export class IngresoPage {
  Usuarios = []
  error = false;
  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit() {
    this.Usuarios = this.usuarioService.getUsuarios();

  }

  login(user: HTMLInputElement, pass: HTMLInputElement) {
    try {
      const usuario = user.value;
      const password = pass.value;

      for (let i of this.Usuarios) {
        if (usuario == i.usuario) {
          if (password == i.password) {
            this.error = false;
            this.router.navigate(['/inicio', i.id])
            break;
          }
          else {
            this.error = true;
            break;
          }
        }
        this.error = true;
      }
    }

    catch {
      this.error = true;
    }
  }
  recuperar() {
    this.router.navigate(['/recuperar'])
  }
}

