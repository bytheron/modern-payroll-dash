import { AsyncPipe, CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, combineLatest, map } from 'rxjs';
import { UserProfile } from '../../features/user-profile/user-profile';
import { IViewData } from './../../core/schemas/interfaces/employee.interface';
import { EmployeeDataService } from './../../core/services/employee-data.service';
import { TasksTable } from './../../features/tasks-table/tasks-table';
import { Header } from './../../shared/header/header';

@Component({
  selector: 'app-employee-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    AsyncPipe,
    UserProfile,
    TasksTable,
    Header
  ],
  templateUrl: './employee-dashboard.html',
  styleUrls: ['./employee-dashboard.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeDashboard implements OnInit {
  public viewData$!: Observable<IViewData>;

  constructor(private _employeeDataService: EmployeeDataService) {}

  ngOnInit(): void {
    this.loadData();
  }

  private loadData(): void {
    this.viewData$ = combineLatest([
      this._employeeDataService.getUserProfile(),
      this._employeeDataService.getTasks()
    ]).pipe(
      map(([userProfile, tasks]) => ({ userProfile, tasks }))
    );
  }

  public handleTaskAction(event: { taskId: string; action: string }): void {
    console.log(`Action: '${event.action}' triggered for Task ID: ${event.taskId}`);
  }

  public onPrimaryAction(): void {
    console.log('Primary action triggered');
  }
}
