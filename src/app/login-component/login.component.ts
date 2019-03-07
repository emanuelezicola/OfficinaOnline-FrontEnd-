import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { debounceTime, tap } from 'rxjs/operators';
import { LoginService } from '../shared/login-service/login.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route:ActivatedRoute, private fb:FormBuilder, private loginService: LoginService, private router: Router) { }

  myForm:FormGroup;

  loginObj = {
    email : '',
    password : ''
  };

  data = {
    message : "",
    obj : "",
    status : false
  }

  login(){

    this.route.paramMap.subscribe(params => {
      this.loginService.doLogin(this.loginObj).subscribe( params => function() {
        this.data = params;
      });
      console.log(this.data);
    });
    
    //this.loginService.doLogin(this.loginObj).subscribe( result => function() {
     // console.log(result);
   // });
  }

  ngOnInit() {

    this.myForm = this.fb.group({
      email:'',
      password:''
    })

    this.myForm.valueChanges.pipe(
      tap(value => {
        this.loginObj.email = value.email;
        this.loginObj.password = value.password;})
    ).subscribe();
  }

}