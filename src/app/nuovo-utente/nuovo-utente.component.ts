import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-nuovo-utente',
  templateUrl: './nuovo-utente.component.html',
  styleUrls: ['./nuovo-utente.component.css']
})
export class NuovoUtenteComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  myForm:FormGroup;


  registrationObj = {
    nome : "",
    cognome : "",
    email : "",
    password : "",
    password_repeat : ""
  }

  data = {
    message : "",
    obj : "",
    status : false
  }

  registrati() {
      console.log(this.registrationObj);
  }


  ngOnInit() {

    this.myForm = this.fb.group({
      nome:'',
      cognome:'',
      email:'',
      password:'',
      password_repeat:''
    })

    this.myForm.valueChanges.pipe(
      tap(value => {
        this.registrationObj.nome = value.nome;
        this.registrationObj.cognome = value.cognome;
        this.registrationObj.email = value.email;
        this.registrationObj.password = value.password;
        this.registrationObj.password_repeat = value.password_repeat;
      })
    ).subscribe();
  }

}
