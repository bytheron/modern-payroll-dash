import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

export interface NavItem {
  id: string;
  route: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-sidebar-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar-nav.html',
  styleUrls: ['./sidebar-nav.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarNav {
  @Input() public navItems: NavItem[] = [];
  @Input() public activeItemId: string | null = null;
  @Output() public itemSelected = new EventEmitter<string>();

  public onItemClick(itemId: string): void {
    this.itemSelected.emit(itemId);
  }
}
