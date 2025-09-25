import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IUserProfile } from '../../core/schemas/interfaces/employee.interface';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile.html',
  styleUrls: ['./user-profile.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserProfile {
  @Input() public profileData!: IUserProfile | null;
}
