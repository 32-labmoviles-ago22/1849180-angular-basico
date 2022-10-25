import { Injectable } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Alumno } from './alumno.model';
@Injectable({
  providedIn: 'root'
})
export class ListaAlumnosService {

  constructor() { }

  imprimeMensaje(mensaje:string){
    console.log(mensaje)
  }

  agregarAlumno(nuevoAlumno:Alumno){
    this.alumnos.push(nuevoAlumno);
    nuevoAlumno={
      nombre:'',
      matricula: undefined,
      presente:false
    }
  }

  buscaAlumno(alumnoNombre:string){
    //Busca Alumno en el arreglo
    let alumno;
    for(let i=0;i<this.alumnos.length;i++){
      if(this.alumnos[i].nombre=alumnoNombre){
        alumno=this.alumnos[i];
      }
    }

    return alumno;
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
