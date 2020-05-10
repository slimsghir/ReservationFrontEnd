import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { EmployeViewModel } from '../../models/employe';
import { InfosToUpdateSuperviseur } from '../../models/employe';

@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: 'table.component.html'
})

export class TableComponent implements OnInit{

    employes: EmployeViewModel [] = [];
    
    constructor(private apiService: ApiService){}
    
    ngOnInit(){
        this.getAllEmployes();
    }

    getAllEmployes(){
        this.apiService.getAllEmployes().subscribe(
            res => {
                this.employes = res;
            },
            err => {
                console.log("Error");
            }
        )  
    }


    deleteEmploye(employe: EmployeViewModel): void {
        if(confirm("Êtes-vous sûr que vous voulez supprimer l'employé "+employe.prenom+" "+employe.nom+" ?")){
            this.apiService.deleteEmploye(employe.id).subscribe(
                res =>{
                    let indexOfEmploye = this.employes.indexOf(employe);
                    this.employes.splice(indexOfEmploye,1);
                },
                err =>{
                    alert("Impossible de supprimer l'employé" );
                }
            )
        }
    }

    onEditSuperviseur(idSuperviseur: string, employe: EmployeViewModel) {
    
        var infos: InfosToUpdateSuperviseur ={
            idemploye: employe.id,
            idsuperviseur: idSuperviseur
        }

        this.apiService.updateSuperviseur(infos)
            .subscribe(
                data => {
                    console.log(data)
                    location.reload();
                },
                error => {
                    console.log(error)
                });
    }

}
