import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import{Alumno} from 'src/app/alumno.model';
import{ListaAlumnosService} from 'src/app/lista-alumnos.service'

interface alumnoasistencia {
  nombre: string;
  matricula:number;
  presente: boolean;
}

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  constructor(private alertaController : AlertController, private actionSheetController : ActionSheetController, private listaAlumnos: ListaAlumnosService) { }

  ngOnInit(): void {
    //console.log(this.alumnos);
    this.listaAlumnos.imprimeMensaje("Este es mi mensaje personalizado")
  }

  onSubmit(){
    //Agregar a Lista
    //Limpiar variables
    

  }

  async mensajeAlerta(tipoMensaje: string){
    const alerta = this.alertaController.create(
      {
        header: 'ATENCIÓN',
        subHeader: 'ESTO ES ' + tipoMensaje,
        message: 'SALIR',
        buttons: ['OK'],
      }
    );

    (await alerta).present();

  }

  async abrirActionSheet(){
    const actionSheet = this.actionSheetController.create({
      header: 'Yo soy la ActionSheet',
      subHeader: '',
      buttons: [
        {
          text: 'Borrar',
          role: 'destructive',
          data: {
            action: 'delete',
          },
        },

        {
          text: 'Compartir',
          data:{
            action: 'compartir',
          },
        },

        {
          text: 'Cancelar',
          role: 'cancel',
          data:{
            action: 'cancelar',
          },
        },
        
      ]
    });

    (await actionSheet).present();

  }

nuevoAlumno: Alumno ={
    nombre: '',
    matricula: undefined,
    presente: false
  }

  agregarAlumno() {
    this.listaAlumnos.agregarAlumno
  }

  alumnos: Alumno[] = this.listaAlumnos.alumnos
}
