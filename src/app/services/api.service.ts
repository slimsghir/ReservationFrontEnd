import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{ EmployeViewModel } from '../models/employe';
import { InfosToUpdateSuperviseur, EmployeRepresentation} from '../models/employe';
import { ReservationRepresentation, ReservationViewModel } from 'app/models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  private FIND_ALL_EMPLOYES = "http://localhost:8080/employe/findall";
  private SAVE_EMPLOYE = "http://localhost:8080/employe/save";
  private DELETE_EMPLOYE_ID = "http://localhost:8080/employe/delete/";
  private UPDATE_SUPERVISEUR = "http://localhost:8080/employe/updateSuperviseur";
  private SAVE_RESERVATION = "http://localhost:8080/reservation/save";
  private FIND_ALL_RESERVATIONS = "http://localhost:8080/reservation/findall";
  private DELETE_RESERVATION_ID = "http://localhost:8080/reservation/delete/";

  constructor(private http: HttpClient) { }

  getAllEmployes() : Observable<EmployeViewModel[]>{
    return this.http.get<EmployeViewModel[]>(this.FIND_ALL_EMPLOYES);
  }

  deleteEmploye(id: string): Observable<any>{
    return this.http.delete(this.DELETE_EMPLOYE_ID+id)
  }

  updateSuperviseur(infos: InfosToUpdateSuperviseur): Observable<any> {
    return this.http.post(this.UPDATE_SUPERVISEUR, infos);
  }

  saveEmploye(employe: EmployeRepresentation): Observable<any>{
    return this.http.post(this.SAVE_EMPLOYE, employe);
  }

  saveReservation(reservation: ReservationRepresentation): Observable<any>{
    return this.http.post(this.SAVE_RESERVATION, reservation);
  }

  getAllReservations() : Observable<ReservationViewModel[]>{
    return this.http.get<ReservationViewModel[]>(this.FIND_ALL_RESERVATIONS);
  }

  deleteReservation(id: string): Observable<any>{
    return this.http.delete(this.DELETE_RESERVATION_ID+id)
  }

}
