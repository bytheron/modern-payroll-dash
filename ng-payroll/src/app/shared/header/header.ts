import { Component, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

import { SearchInput } from '../../shared/ui/search-input/search-input';
import { Button } from '../../shared/ui/button/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SearchInput, Button],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class Header implements OnDestroy {
  @Output() public searchQuery = new EventEmitter<string>();
  @Output() public primaryAction = new EventEmitter<void>();
  @Output() public secondaryAction = new EventEmitter<void>();

  private destroy$ = new Subject<void>();

  constructor() { }

  public onSearch(query: string): void {
    this.searchQuery.emit(query);
    console.log('Search Query:', query);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
