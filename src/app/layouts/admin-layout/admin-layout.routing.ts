import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { ReservationTableComponent } from '../../pages/reservationtable/reservationtable.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { ReservationComponent } from '../../pages/reservation/reservation.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'ajouter-employe',           component: UserComponent },
    { path: 'liste-employes',          component: TableComponent },
    { path: 'liste-reservations',           component: ReservationTableComponent },
    { path: 'ajouter-reservation',  component: ReservationComponent }
];
