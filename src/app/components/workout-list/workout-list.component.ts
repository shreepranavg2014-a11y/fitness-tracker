import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { WorkoutService } from '../../services/workout.service';
import { WorkoutPlan } from '../../models/workout-plan';

@Component({
  selector: 'app-workout-list',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule],
  template: `
    <div class="workout-container">
      <h2>All Workouts</h2>
      <div class="workout-grid">
        <mat-card *ngFor="let workout of workouts" class="workout-card">
          <mat-card-header>
            <mat-card-title>{{ workout!.name }}</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <p><strong>Level:</strong> {{ workout!.difficulty }}</p>
            <p><strong>Duration:</strong> {{ workout!.duration }} mins</p>
            <p>{{ workout!.description }}</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-raised-button color="primary" [routerLink]="['/detail', workout!.id]">
              View Details
            </button>
          </mat-card-actions>
        </mat-card>
      </div>
    </div>
  `,
  styles: [`
    .workout-container {
      padding: 20px;
    }
    .workout-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
      margin-top: 20px;
    }
    .workout-card {
      cursor: pointer;
    }
  `]
})
export class WorkoutListComponent implements OnInit {
  workouts: WorkoutPlan[] = [];

  constructor(private workoutService: WorkoutService) {}

  ngOnInit() {
    this.loadWorkouts();
  }

  loadWorkouts() {
    this.workoutService.getWorkouts().subscribe({
      next: (data) => {
        this.workouts = data;
      },
      error: (err: any) => console.error('Error loading workouts:', err)
    });
  }
}
