import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './componentes/formulario/usuarios/usuarios.component';
import { EgresosComponent } from './componentes/formulario/egresos/egresos.component';
import { VerUsuariosComponent } from './componentes/ver/usuarios/usuarios.component';
import { VerEgresosComponent } from './componentes/ver/egresos/egresos.component';
import { VerEgresosUsuarioComponent } from './componentes/ver/egresos-usuario/egresos-usuario.component';

const routes: Routes = [
  {
    path: '',
    component: UsuariosComponent
  },
  {
    path: 'egresos',
    component: EgresosComponent
  },
  {
    path: 'obtener-usuarios',
    component: VerUsuariosComponent
  },
  {
    path: 'obtener-egresos',
    component: VerEgresosComponent
  },
  {
    path: 'obtener-egresos-usuario',
    component: VerEgresosUsuarioComponent
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
