import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import{Alumno} from 'src/app/alumno.model';

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

  constructor(private alertaController : AlertController, private actionSheetController : ActionSheetController) { }

  ngOnInit(): void {
    //console.log(this.alumnos);
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
    this.alumnos.push(this.nuevoAlumno);
    this.nuevoAlumno={
      nombre:'',
      matricula: undefined,
      presente:false
    }
  }

  alumnos: Alumno[] = [
      {
        nombre: "Edgar Efren",
        matricula:1111111,
        presente: false,
      },
      
      {
        nombre: "Isaac Zuñiga",
        matricula:2222222,
        presente: true,
      },
      
      {
        nombre: "Orlando Castillo",
        matricula:3333333,
        presente: true,
      },
  
      {
        nombre: "Jose David",
        matricula:4444444,
        presente: true,
      },
  
      {
        nombre: "Jesus Gerardo",
        matricula:5555555,
        presente: true,
      },
      
      {
        nombre: "Raul Eduardo",
        matricula:6666666,
        presente: true,
      },
      
      {
        nombre: "Cesar Alexandro",
        matricula:7777777,
        presente: false,
      },
      
      {
        nombre: "Andres Hernandez",
        matricula:8888888,
        presente: false,
      },
      
      {
        nombre: "Antonio Medina",
        matricula:9999999,
        presente: true,
      },
      
      {
        nombre: "Mauricio Nicolas",
        matricula:1211111,
        presente: true,
      },
      
      {
        nombre: "Fidel Ortiz",
        matricula:1121111,
        presente: true,
      },
      
      {
        nombre: "Manuel Rico Luna",
        matricula:1112111,
        presente: true,
      },
      
      {
        nombre: "Jonathan David",
        matricula:1111211,
        presente: true,
      },
      
      {
        nombre: "Felipe Daniel",
        matricula:1111121,
        presente: false,
      },
      
      {
        nombre: "Luis Antonio Rocha",
        matricula:1111112,
        presente: true,
      },
      
      {
        nombre: "Luis Fernando Caamal",
        matricula:2111111,
        presente: false,
      },
      
    ]
}
