import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { User, UserService } from '../../services/user';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class RegisterComponent {
  user: User = {
    firstName: '',
    lastName: '',
    gender: '',
    mobileNo: '',
    dob: '',
    email: '',
  };

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    this.userService.createUser(this.user).subscribe({
      next: () => this.router.navigate(['/users']),
      error: (err) => console.error('Error creating user', err),
    });
  }
}
