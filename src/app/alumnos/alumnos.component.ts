import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';

interface alumnoasistencia {
  nombre: string;
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


  alumnos: any = [
      {
        nombre: "Edgar Efren",
        presente: false,
      },
      
      {
        nombre: "Isaac Zuñiga",
        presente: true,
      },
      
      {
        nombre: "Orlando Castillo",
        presente: true,
      },
  
      {
        nombre: "Jose David",
        presente: true,
      },
  
      {
        nombre: "Jesus Gerardo",
        presente: true,
      },
      
      {
        nombre: "Raul Eduardo",
        presente: true,
      },
      
      {
        nombre: "Cesar Alexandro",
        presente: false,
      },
      
      {
        nombre: "Andres Hernandez",
        presente: false,
      },
      
      {
        nombre: "Antonio Medina",
        presente: true,
      },
      
      {
        nombre: "Mauricio Nicolas",
        presente: true,
      },
      
      {
        nombre: "Fidel Ortiz",
        presente: true,
      },
      
      {
        nombre: "Manuel Rico Luna",
        presente: true,
      },
      
      {
        nombre: "Jonathan David",
        presente: true,
      },
      
      {
        nombre: "Felipe Daniel",
        presente: false,
      },
      
      {
        nombre: "Luis Antonio Rocha",
        presente: true,
      },
      
      {
        nombre: "Luis Fernando Caamal",
        presente: false,
      },
      
    ]
}
