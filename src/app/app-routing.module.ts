import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'ingreso',loadChildren: () => import('./ingreso/ingreso.module').then( m => m.IngresoPageModule)},
  {path: '',redirectTo: 'ingreso',pathMatch: 'full'},
// ⇧ ⇧ Seleccionamos la pagina principal la cual queremos que aparezca al  abrir la aplicacion  ⇧ ⇧
  {
    path: 'inicio/:id',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
