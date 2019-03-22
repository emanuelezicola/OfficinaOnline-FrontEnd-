import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { subscribeOn } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http:HttpClient) { }



  doLogin(params) : Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }
    return this.http.post<any>("http://localhost:8080/OfficinaOnline/rest/utente/login", 
    params, httpOptions);
  }
}
