import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainLayout } from "./layout/main-layout/main-layout";
import { NavItem } from './shared/sidebar-nav/sidebar-nav';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainLayout, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ng-payroll');

  public readonly navItems: NavItem[] = [
    { id: 'item1', route: '/item1', label: 'Item 1', icon: '🏠' },
    { id: 'item2', route: '/item2', label: 'Item 2', icon: '📊' },
    { id: 'item3', route: '/item3', label: 'Item 3', icon: '🛒' },
    { id: 'item4', route: '/item4', label: 'Item 4', icon: '🏦' },
    { id: 'item5', route: '/item5', label: 'Item 5', icon: '📄' },
  ];

  public activeNavItemId: string = 'item5';

  public onNavigate(itemId: string): void {
    this.activeNavItemId = itemId;
    const selectedItem = this.navItems.find(item => item.id === itemId);
    if (selectedItem) {
      // if we had route, we could navigate like this:
      // this.router.navigate([selectedItem.route]);
      console.log(`Navigating to ${selectedItem.route}`);
    }
  }
}
