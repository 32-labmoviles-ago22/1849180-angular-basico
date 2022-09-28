import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    console.log(this.alumnos);
  }
    alumnos: any = [
      {
        nombre: "Edgar Efren",
        presente: false
      },
      
      {
        nombre: "Isaac Briones",
        presente: false
      },
      
      {
        nombre: "Orlando Castillo",
        presente: true
      },
      {
        nombre: "Jose David",
        presente: true
      },
      {
        nombre: "Jesus Gerardo",
        presente: true
      },
      {
        nombre: "Raul Eduardo",
        presente: true
      },
      {
        nombre: "Cesar Alexandro",
        presente: true
      },
      {
        nombre: "Andres Hernandez",
        presente: true
      },
      {
        nombre: "Antonio Medina",
        presente: true
      },
      {
        nombre: "Mauricio Nicolas",
        presente: true
      },
      {
        nombre: "Fidel Ortiz",
        presente: true
      },
      {
        nombre: "Manuel Rico Luna",
        presente: true
      },
      {
        nombre: "Jonathan David",
        presente: true
      },
      {
        nombre: "Felipe Daniel",
        presente: true
      },
      {
        nombre: "Luis Antonio Rocha",
        presente: true
      },
      {
        nombre: "Luis Fernando Caamal",
        presente: true
      },
      
      
      
    ]
}
