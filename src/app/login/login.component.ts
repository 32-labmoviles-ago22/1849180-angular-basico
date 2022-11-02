import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
  loginForm: FormGroup= new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.minLength(9))
  })

  loginSubmit(){
    console.log("Se submitio el formulario")
  }

}
