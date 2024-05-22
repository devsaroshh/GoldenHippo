import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../Model/User.model';

@Component({
  selector: 'app-user-profile-component',
  standalone: true,
  imports: [],
  templateUrl: './user-profile-component.component.html',
  styleUrl: './user-profile-component.component.css',
})
export class UserProfileComponentComponent {
  @Input() user: User = {
    Name: '',
    Email: '',
    ProfileImageUrl: '',
  };
  @Output() profileClick: EventEmitter<void> = new EventEmitter<void>();

  onProfileClick() {
    this.profileClick.emit();
  }
}
