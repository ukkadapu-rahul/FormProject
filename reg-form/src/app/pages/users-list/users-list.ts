import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { User, UserService } from '../../services/user';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './users-list.html',
  styleUrl: './users-list.css',
})
export class UsersListComponent implements OnInit {
  users$!: Observable<User[]>;
  editUser: User | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.users$ = this.userService.getUsers();
  }

  startEdit(user: User) {
    this.editUser = { ...user };
  }

  saveEdit() {
    if (!this.editUser || this.editUser.id == null) return;

    this.userService.updateUser(this.editUser).subscribe({
      next: () => {
        this.editUser = null;
        this.loadUsers();
      },
      error: (err) => console.error('Error updating user', err),
    });
  }

  cancelEdit() {
    this.editUser = null;
  }

  delete(id: number) {
    if (!confirm('Are you sure you want to delete this user?')) return;

    this.userService.deleteUser(id).subscribe({
      next: () => this.loadUsers(),
      error: (err) => console.error('Error deleting user', err),
    });
  }
}
