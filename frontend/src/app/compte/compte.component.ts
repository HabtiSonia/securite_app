import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Compte} from '../models/compte.model';
import {FormService} from '../services/form.service';
import { Router } from '@angular/router'
interface cmp {
  name : string;
  mail : string;
}
@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {
  compteForm = this.fb.group({
    nom : [''],
    prenom : [''],
    email : [],
    password : []
  });
  compte: Compte = new Compte('', '', '', '');


  constructor(private fb : FormBuilder, private formService : FormService, private router : Router) { }

  ngOnInit(): void {
  }

  postInfo(){
  
  
    var compte = new Compte(
      this.compteForm.value.nom,
      this.compteForm.value.prenom,
      this.compteForm.value.email,
      this.compteForm.value.password

  

    )
    console.log(compte);
    this.formService.postCompte(compte).subscribe((res)=>{
      console.log("new account ok", res)
      this.router.navigate(['/identification']);
  })
// (err)=>{
//   console.log("err new account : "+ err)
// })
console.log(this.compteForm.value)

}
  }
