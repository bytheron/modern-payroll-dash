import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

// A type definition for clarity and type safety
export interface ToolbarAction {
  id: string;
  label: string;
  icon: string; // Placeholder for an icon name or SVG path
}

@Component({
  selector: 'app-action-toolbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './action-toolbar.html',
  styleUrls: ['./action-toolbar.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionToolbar {
  /**
   * An array of actions to be displayed in the toolbar.
   * Example: [{ id: 'notifications', label: 'Notifications', icon: '🔔' }]
   */
  @Input() actions: ToolbarAction[] = [];

  /**
   * The ID of the currently active action. The parent component controls this
   * to highlight the correct icon.
   */
  @Input() activeActionId: string | null = null;

  /**
   * Emits the ID of the action that was clicked.
   */
  @Output() actionSelected = new EventEmitter<string>();

  /**
   * Handles the click event on an action button.
   * @param actionId The ID of the clicked action.
   */
  public onActionClick(actionId: string): void {
    this.actionSelected.emit(actionId);
  }
}
