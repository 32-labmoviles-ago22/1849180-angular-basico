import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoDetalleComponent } from './alumno-detalle/alumno-detalle.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { InicioComponent } from './inicio/inicio.component';
import { MateriasComponent } from './materias/materias.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch: 'full'
  },
  {
    path:'',
    redirectTo:'/alumnos',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'alumnos',
    component: AlumnosComponent
  },
  {
    path:'materias',
    component: MateriasComponent
  },
  {
    path:'alumno/:nombre',
    component: AlumnoDetalleComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registro',
    component: RegistroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
