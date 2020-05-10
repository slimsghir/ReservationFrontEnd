import { EmployeViewModel } from './employe';

export class ReservationRepresentation {
    lieuDepart: string;
    lieuDestination: string;
    dateReservation: Date;
    idemployes: string [];

    constructor(lieuDepart: string, lieuDestination: string, dateReservation: Date, idemployes: string []){
        this.lieuDepart=lieuDepart;
        this.lieuDestination=lieuDestination;
        this.dateReservation=dateReservation;
        this.idemployes=idemployes;
    }
}

export class ReservationViewModel {
    id: string
    lieuDepart: string;
    lieuDestination: string;
    dateReservation: Date;
    etat: number;
    employes: EmployeViewModel [];
}