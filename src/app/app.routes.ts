import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth.guard';
import { authChildGuard } from './guards/auth-child.guard';
import { authMatchGuard } from './guards/auth-match.guard';
import { CriarComponent } from './desafio/produtos/criar/criar.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'desafio/produtos/criar', component: CriarComponent },
    { 
        path: 'dashboard', 
        component: DashboardComponent, 
        // canActivate: [authGuard] // Guarda de rota responsável por proteger a rota do dashboard
    },
    { 
        path: 'pacientes',
        // canActivateChild: [authChildGuard], // Guarda de rota responsável por proteger as rotas filhas
        // canMatch: [authMatchGuard], // Guarda de rota responsável por proteger o carregamento de modulos externos
        loadChildren: () => import('./pages/pacientes/pacientes.routes').then(m => m.routes)
    },
];
