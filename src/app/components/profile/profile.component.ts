import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  template: `
    <div class="profile-container">
      <h2>User Profile</h2>
      <mat-card class="profile-card" *ngIf="user">
        <mat-card-header>
          <mat-card-title>{{ user.name }}</mat-card-title>
          <mat-card-subtitle>{{ user.email }}</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <div class="profile-info">
            <div class="info-section">
              <h3>Personal Information</h3>
              <div class="info-row">
                <label>Name:</label>
                <input matInput [(ngModel)]="user.name" [disabled]="!isEditing">
              </div>
              <div class="info-row">
                <label>Email:</label>
                <input matInput [(ngModel)]="user.email" [disabled]="!isEditing">
              </div>
              <div class="info-row">
                <label>Age:</label>
                <input matInput type="number" [(ngModel)]="user.age" [disabled]="!isEditing">
              </div>
              <div class="info-row">
                <label>Fitness Goal:</label>
                <input matInput [(ngModel)]="user.fitnessGoal" [disabled]="!isEditing">
              </div>
            </div>
            <div class="info-section" *ngIf="user.stats">
              <h3>Statistics</h3>
              <div class="info-row">
                <label>Total Workouts:</label>
                <span>{{ user.stats.totalWorkouts }}</span>
              </div>
              <div class="info-row">
                <label>Total Hours:</label>
                <span>{{ user.stats.totalHours }}</span>
              </div>
              <div class="info-row">
                <label>Calories Burned:</label>
                <span>{{ user.stats.caloriesBurned }}</span>
              </div>
            </div>
          </div>
        </mat-card-content>
        <mat-card-actions>
          <button mat-raised-button color="primary" *ngIf="!isEditing" (click)="enableEdit()">
            Edit Profile
          </button>
          <button mat-raised-button color="primary" *ngIf="isEditing" (click)="saveProfile()">
            Save Changes
          </button>
          <button mat-raised-button *ngIf="isEditing" (click)="cancelEdit()">
            Cancel
          </button>
        </mat-card-actions>
      </mat-card>
      <div *ngIf="!user" class="loading">
        <p>Loading profile...</p>
      </div>
    </div>
  `,
  styles: [`
    .profile-container {
      padding: 20px;
      max-width: 600px;
      margin: 0 auto;
    }
    .profile-card {
      margin-top: 20px;
    }
    .profile-info {
      margin: 20px 0;
    }
    .info-section {
      margin-bottom: 30px;
    }
    .info-section h3 {
      border-bottom: 2px solid #1976d2;
      padding-bottom: 10px;
      margin-bottom: 15px;
    }
    .info-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 0;
      border-bottom: 1px solid #e0e0e0;
    }
    .info-row label {
      font-weight: 500;
      min-width: 150px;
    }
    .info-row input {
      flex: 1;
      margin-left: 20px;
      padding: 8px;
      border: none;
      border-bottom: 1px solid #ccc;
    }
    .info-row input:disabled {
      border-bottom: none;
      background: transparent;
    }
    .info-row span {
      font-weight: 500;
    }
    .loading {
      text-align: center;
      padding: 40px;
    }
    mat-card-actions {
      display: flex;
      gap: 10px;
      padding-top: 20px;
      border-top: 1px solid #e0e0e0;
    }
  `]
})
export class ProfileComponent implements OnInit {
  user: User | null = null;
  isEditing = false;
  private originalUser: User | null = null;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUserProfile();
  }

  loadUserProfile() {
    this.userService.getCurrentUser().subscribe({
      next: (data) => {
        this.user = data;
        this.originalUser = { ...data };
      },
      error: (err) => console.error('Error loading user profile:', err)
    });
  }

  enableEdit() {
    this.isEditing = true;
  }

  saveProfile() {
    if (this.user) {
      this.userService.updateUser(this.user).subscribe({
        next: () => {
          this.isEditing = false;
          this.originalUser = { ...this.user! };
          alert('Profile updated successfully!');
        },
        error: (err) => console.error('Error updating profile:', err)
      });
    }
  }

  cancelEdit() {
    if (this.originalUser) {
      this.user = { ...this.originalUser };
      this.isEditing = false;
    }
  }
}
