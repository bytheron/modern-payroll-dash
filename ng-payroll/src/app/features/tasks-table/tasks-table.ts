import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ITask } from '../../core/schemas/interfaces/employee.interface';
import { Header } from '../../shared/header/header';

// Define a type for sorting for better type safety
export type SortDirection = 'asc' | 'desc';
export interface SortEvent {
  column: keyof ITask;
  direction: SortDirection;
}

@Component({
  selector: 'app-tasks-table',
  standalone: true,
  imports: [CommonModule, Header],
  templateUrl: './tasks-table.html',
  styleUrls: ['./tasks-table.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksTable {
  @Input() public tasks!: ITask[] | null;
  @Output() public actionClicked = new EventEmitter<{ taskId: string; action: string }>();
  @Output() public sortChanged = new EventEmitter<SortEvent>();

  private _currentSort: SortEvent = { column: 'name', direction: 'asc' };

  public onPrimaryActionClick(taskId: string): void {
    this.actionClicked.emit({ taskId, action: 'primary' });
  }

  public onSort(column: keyof ITask): void {
    let direction: SortDirection = 'asc';
    // If sorting the same column, flip the direction
    if (this._currentSort.column === column && this._currentSort.direction === 'asc') {
      direction = 'desc';
    }

    this._currentSort = { column, direction };
    this.sortChanged.emit(this._currentSort);
  }

  public onPrimaryAction(): void {
    console.log('Primary action triggered');
  }

  public trackById(index: number, task: ITask): string {
    return task.id;
  }
}
