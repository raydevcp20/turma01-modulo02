import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth.guard';
import { authChildGuard } from './guards/auth-child.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { 
        path: 'dashboard', 
        component: DashboardComponent, 
        canActivate: [authGuard] // Guarda de rota responsável por proteger a rota do dashboard
    },
    { 
        path: 'pacientes',
        canActivateChild: [authChildGuard], // Guarda de rota responsável por proteger as rotas filhas
        loadChildren: () => import('./pages/pacientes/pacientes.routes').then(m => m.routes)
    },
];
