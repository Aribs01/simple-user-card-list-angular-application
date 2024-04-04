import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserInterface } from 'src/app/core/interfaces/user.interface';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent {
  @Input() user!: UserInterface;

  constructor(private router: Router) {}

  onCardClick(userId: number) {
    this.router.navigateByUrl(`users/view/${userId}`);
  }
}
