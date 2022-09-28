import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { InicioComponent } from './inicio/inicio.component';
import { MateriasComponent } from './materias/materias.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'inicio',
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
