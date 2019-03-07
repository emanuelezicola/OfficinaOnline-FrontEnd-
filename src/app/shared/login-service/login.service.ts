import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { subscribeOn } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http:HttpClient) { }



  doLogin =  function(loginObj){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }
    return this.http.post("http://localhost:8080/OfficinaOnline/rest/utente/login", 
          loginObj, httpOptions);
  }
}
