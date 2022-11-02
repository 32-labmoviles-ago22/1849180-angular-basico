import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { IonicModule } from '@ionic/angular';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { TabsComponent } from './tabs/tabs.component';
import { MateriasComponent } from './materias/materias.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlumnoDetalleComponent } from './alumno-detalle/alumno-detalle.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AlumnosComponent,
    TabsComponent,
    MateriasComponent,
    AlumnoDetalleComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
