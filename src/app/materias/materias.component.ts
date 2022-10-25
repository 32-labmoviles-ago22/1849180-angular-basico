import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-materias',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriasComponent implements OnInit {

  constructor(private actionSheetController : ActionSheetController, private alertaController : AlertController) { }
  

  ngOnInit(): void {
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

  materias:any=[
    'Aplicaciones Móviles',
    'Laboratorio de Móviles',
    'Base de Datos',
    'Ecuaciones Diferenciales'
  ]

}
