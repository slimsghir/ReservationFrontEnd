import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
    { path: '/ajouter-employe',          title: "Ajout employé",      icon:'nc-single-02',  class: '' },
    { path: '/liste-employes',         title: 'Liste des employés',        icon:'nc-tile-56',    class: '' },
    { path: '/ajouter-reservation', title: 'Ajout réservation',     icon:'nc-bell-55',    class: '' },
    { path: '/liste-reservations',          title: 'Liste des réservations',        icon:'nc-tile-56',      class: '' }
    
    
    
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
