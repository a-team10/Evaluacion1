import { Injectable } from '@angular/core';
import { Usuario } from './usuario.model';
@Injectable({
  providedIn: 'root'
})

// ⇩ ⇩ Creacion de usuario para luego devolver  los datos en la pagina de inicio ⇩ ⇩
export class UsuarioService {
  private usuariosExistentes: Usuario[] =[
// ⇩ ⇩ USUARIO 1 ⇩ ⇩
    {
      id: 1,
      usuario: 'benjaminnunez',
      nombre : 'Benjamin Nicolas Nunes herrada',
      password : 'benjaminnunez',
      carrera : 'Ingeniería en Informática',
      sede : 'Plaza Oeste',
      foto : 'assets/img/avatar.png'
    },
// ⇩ ⇩ USUARIO 2 ⇩ ⇩
    {
      id: 2,
      usuario: 'maxcruz',
      nombre : 'Maximiliano Joel Cruz Santander ',
      password: 'maxcruz',
      carrera : 'Ingeniería en Informática',
      sede : 'Plaza Oeste',
      foto :'assets/img/avatar.png'
    },

  ]
  constructor() { }

  getUsuarios(){
    return this.usuariosExistentes
  }
  getUsuario(id : number)
  {
    return this.usuariosExistentes.find(x => {return x.id == id})
  }
}
