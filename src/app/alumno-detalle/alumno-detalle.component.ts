import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Alumno } from '../alumno.model';
import { ListaAlumnosService } from '../lista-alumnos.service';

@Component({
  selector: 'app-alumno-detalle',
  templateUrl: './alumno-detalle.component.html',
  styleUrls: ['./alumno-detalle.component.css']
})
export class AlumnoDetalleComponent implements OnInit {

  constructor(
    private ruta:ActivatedRoute, 
    private listaAlumnos: ListaAlumnosService
    ) { }

  ngOnInit(): void {
    console.log(this.alumnoEncontrado)
  }

    alumno:string = this.ruta.snapshot.params['nombre'];

    //asignar a tipo Alumno
    alumnoEncontrado:any=this.listaAlumnos.buscaAlumno(this.alumno);
}
