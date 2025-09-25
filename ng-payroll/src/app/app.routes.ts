import { Routes } from '@angular/router';
import { EmployeeDashboard } from './pages/employee-dashboard/employee-dashboard';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: EmployeeDashboard },
];