import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ReservationViewModel } from 'app/models/reservation';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
    moduleId: module.id,
    selector: 'reservationtable-cmp',
    templateUrl: 'reservationtable.component.html'
})

export class ReservationTableComponent implements OnInit {

    reservations: ReservationViewModel [] = [];
    private closeResult: string;
    
    constructor(private apiService: ApiService, private modalService: NgbModal){}
    
    ngOnInit(){
        this.getAllReservations();
    }

    getAllReservations(){
        this.apiService.getAllReservations().subscribe(
            res => {
                this.reservations = res;
            },
            err => {
                console.log("Error");
            }
        )  
    }


    deleteReservation(reservation: ReservationViewModel): void {
        if(confirm("Êtes-vous sûr que vous voulez supprimer cette reservation ?")){
            console.log(reservation.id);
            this.apiService.deleteReservation(reservation.id).subscribe(
                res =>{
                    let indexOfReservation = this.reservations.indexOf(reservation);
                    this.reservations.splice(indexOfReservation,1);
                },
                err =>{
                    alert("Impossible de supprimer la réservation" );
                }
            )
        }
    }

    getEtat(etat: number): string {
        if(etat==0)
            return "En Attente";
        else if(etat==1)
            return "Acceptée";
        else if(etat==2)
            return "Refusée";
        return "Erronée"
    }

    displayEmployes(reservation: ReservationViewModel){
        console.log(reservation.employes);
    }

    private open(content, type, modalDimension) {
        if (modalDimension === 'sm' && type === 'modal_mini') {
            this.modalService.open(content, { windowClass: 'modal-mini', size: 'sm', centered: true }).result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            });
        } else if (modalDimension === '' && type === 'Notification') {
            this.modalService.open(content, { windowClass: 'modal-danger', centered: true }).result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            });
        } else {
            this.modalService.open(content,{ centered: true }).result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            });
        }
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }

    getEmployesEnCharge(reservation: ReservationViewModel): string {
        var toReturn: string = null;
        reservation.employes.forEach(employe =>{
            if(toReturn==null)
                toReturn=employe.prenom+" "+employe.nom;
            else
                toReturn=toReturn+", "+employe.prenom+" "+employe.nom;
        })
        toReturn=toReturn+".";
        return toReturn;
    }

}
