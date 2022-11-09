import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

/*
  function miValidator(c: AbstractControl): {[key:string]: boolean | null{
    return null;
  }


  public loginForm: this.fb.group({
    email:{},
    password:{'', [Validators.required, miValidator]}
  });
*/
  registroForm: FormGroup= new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.minLength(9))
  })

  registroSubmit(){
    console.log("Se submitio el formulario")
  }

}
