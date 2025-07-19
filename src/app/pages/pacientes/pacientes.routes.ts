import { Routes } from "@angular/router";
import { PacientesComponent } from "./pacientes.component";
import { CreateComponent } from "./create/create.component";
import { DetailComponent } from "./detail/detail.component";
import { adminUserGuard } from "../../guards/admin-user.guard";

export const routes: Routes = [
    { path: '', component: PacientesComponent},
    { path: 'criar', component: CreateComponent, 
        // canActivate: [adminUserGuard] // Guarda de rota responsável por proteger a rota de criação
    }, 
    { path: 'detalhamento', component: DetailComponent},
];