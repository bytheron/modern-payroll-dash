import { Component, signal } from '@angular/core';
import { TasksTable } from "./features/tasks-table/tasks-table";
import { UserProfile } from "./features/user-profile/user-profile";
import { MainLayout } from "./layout/main-layout/main-layout";
import { EmployeeDashboard } from "./pages/employee-dashboard/employee-dashboard";
import { Header } from "./shared/header/header";
import { SidebarNav } from "./shared/sidebar-nav/sidebar-nav";

@Component({
  selector: 'app-root',
  imports: [MainLayout, SidebarNav, EmployeeDashboard, Header, UserProfile, TasksTable],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ng-payroll');
}
