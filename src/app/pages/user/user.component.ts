import { Component, OnInit } from '@angular/core';
import { EmployeRepresentation } from '../../models/employe';
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html'
})

export class UserComponent implements OnInit{

    constructor(private apiService: ApiService){}

    model: EmployeRepresentation = {
        nom :'',
        prenom:'',
        login:'',
        email:'',
        phone: null
      }

    ngOnInit(){
    }

    inscrire(){
        if(confirm("Voulez-vous vraiment ajouter "+ this.model.prenom+" "+this.model.nom+" ?")){
        this.apiService.saveEmploye(this.model).subscribe(
            res => {
                console.log(res);
                location.reload();
            },
            err => {
                console.log(err);
            })
        }
    }
}
