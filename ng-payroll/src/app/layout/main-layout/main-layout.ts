import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavItem, SidebarNav } from '../../shared/sidebar-nav/sidebar-nav';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [SidebarNav, RouterModule],
  templateUrl: './main-layout.html',
  styleUrls: ['./main-layout.scss']
})
export class MainLayout {
  @Input() navItems: NavItem[] = [];
  @Input() activeNavItemId: string = '';
  @Output() itemSelected = new EventEmitter<string>();

  onNavigate(itemId: string): void {
    this.itemSelected.emit(itemId);
  }
}
