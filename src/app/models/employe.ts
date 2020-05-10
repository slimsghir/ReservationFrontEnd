export interface EmployeViewModel {
    id: string;
    nom: string;
    prenom: string;
    login: string;
    email: string;
    phone: number;
    superviseur: EmployeViewModel;
}

export class InfosToUpdateSuperviseur {
    idemploye: string;
    idsuperviseur: string;
}

export class EmployeRepresentation {
    nom: string;
    prenom: string;
    login: string;
    email: string;
    phone: number;
}

