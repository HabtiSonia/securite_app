import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {FormService} from '../services/form.service';
import {Login} from '../models/login.model'
import {Router} from '@angular/router';

@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.css']
})

export class IdentificationComponent implements OnInit {
  email : string = '';
  password : string = '';
  disabled = false;
   loginform = new FormGroup({
     email : new FormControl(''),
     password : new FormControl('')
   });
   loginn : Login = new Login('', '');

  constructor(private router : Router, private formService : FormService) {}
  ngOnInit(): void {
    // this.getIdentifiant();
  
 };

  login(){
 

  }
  clearForm(){

    this.loginform.reset();
  }

  getIdentifiant(email : string, password : string){
    console.log(email, password);
   this.email = email;
   this.password = password;
    console.log('Données recuperer: ', this.loginform.value);
   
     this.formService.getLog(this.email, this.password).subscribe(data=>{
      this.loginn = data
      console.log('Donnees : ',this.loginn);
     }   
     )
     this.router.navigate(['/pageSuccess']);


    
  
}
}