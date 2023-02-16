import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Compte} from '../models/compte.model'
import {Login} from '../models/login.model'

import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http:HttpClient) { }

  postCompte(newAccount: Compte): Observable<any>{
    return this.http.post<any>("/api/route/postCompte", {newAccount})
  }
    getCompte(): Observable<Compte>{
      return this.http.get<Compte>(`/api/route/getCompte`)
    
}

getLog(email : string, password : string): Observable<Login>{
  return this.http.get<Login>(`/api/route/getLog?email=${email}&password=${password}`)
}


}
