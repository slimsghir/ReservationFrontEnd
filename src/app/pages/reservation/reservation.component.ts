import { Component, OnInit } from '@angular/core';
import { EmployeRepresentation, EmployeViewModel } from '../../models/employe';
import { ApiService } from '../../services/api.service';
import { ReservationRepresentation } from '../../models/reservation';

@Component({
  selector: 'reservation-cmp',
  moduleId: module.id,
  templateUrl: 'reservation.component.html'
})

export class ReservationComponent implements OnInit{

  constructor(private apiService: ApiService){}

  employes: EmployeViewModel [] = [];
  selectedEmployes: string = null;
  selectedEmploye: string= null;

  model= {
    lieuDepart :'',
    lieuDestination:'',
    dateReservation: null,
    idemployes: []
  }

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

  /*valider(){
      if(confirm("Voulez-vous vraiment ajouter cette réservation ?")){
        this.apiService.saveReservation(this.model).subscribe(
          res => {
            console.log(res);
          },
          err => {
            console.log(err);
          })
      
      }
  }*/

  valider(){
    if(confirm("Voulez-vous vraiment ajouter cette réservation ?")){
      var dateReservation=new Date(this.model.dateReservation.year,this.model.dateReservation.month,this.model.dateReservation.day);
      var reservation = new ReservationRepresentation(this.model.lieuDepart, this.model.lieuDestination, dateReservation, this.model.idemployes);
      console.log(reservation);
      this.apiService.saveReservation(reservation).subscribe(
        res => {
          console.log(res);
          location.reload();
        },
        err => {
          console.log(err);
        })
  
    }
  }


  onEditAjout(event: any){
    
    
    var selectedEmploye=event.target.options[event.target.options.selectedIndex].text;
    var idSeletecEmploye=event.target.value

    if(confirm("Voulez-vous vraiment ajouter "+selectedEmploye+" à la liste des employés en charge ?")){
      if (this.selectedEmployes==null)
        this.selectedEmployes=selectedEmploye;
      else
        this.selectedEmployes=this.selectedEmployes+", "+selectedEmploye;
      
      this.model.idemployes.push(idSeletecEmploye);
    
    }
  }

  exists(idemploye: string): boolean{
    if(this.model.idemployes.indexOf(idemploye)==-1)
      return false;
    return true;
  }

}
