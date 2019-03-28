import { Component, OnInit, OnDestroy } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { debounceTime, tap } from 'rxjs/operators';
import { LoginService } from '../shared/login-service/login.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {

  constructor(private route:ActivatedRoute, private fb:FormBuilder, private loginService: LoginService, private router: Router) { }

  public subscription: Subscription;

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

    this.subscription =  this.loginService.doLogin(this.loginObj).subscribe( params => {
        this.data = params;
        
        if(this.data == null || this.data.status == false) {
          //TORNARE SU PAGINA DI LOGIN
          this.router.navigate(['']);
          alert(this.data.obj);
          return;
        } 
        
        this.router.navigate(['home']);

      },err =>console.log(err));
  }

  ngOnDestroy(){
    if(this.subscription != undefined) {
      this.subscription.unsubscribe();
    }
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