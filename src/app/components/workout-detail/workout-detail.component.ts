import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { WorkoutService } from '../../services/workout.service';
import { WorkoutPlan } from '../../models/workout-plan';

@Component({
  selector: 'app-workout-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule],
  template: `
    <div class="detail-container" *ngIf="workout">
      <button mat-raised-button [routerLink]="['/workouts']" class="back-btn">
        ← Back to Workouts
      </button>
      <mat-card class="workout-detail">
        <mat-card-header>
          <mat-card-title>{{ workout!.name }}</mat-card-title>
          <mat-card-subtitle>{{ workout!.description }}</mat-card-subtitle>
        </mat-card-header>
        <mat-card-content>
          <div class="detail-info">
            <div class="info-row">
              <strong>Difficulty Level:</strong>
              <span>{{ workout!.difficulty }}</span>
            </div>
            <div class="info-row">
              <strong>Duration:</strong>
              <span>{{ workout!.duration }} minutes</span>
            </div>
            <div class="info-row">
              <strong>Exercises:</strong>
              <span>{{ workout!.exerciseIds!.length || 0 }} exercises</span>
            </div>
          </div>
          <div *ngIf="workout!.exerciseIds && workout!.exerciseIds.length > 0" class="exercises-section">
            <h3>Exercises in this workout:</h3>
            <ul>
              <li *ngFor="let exerciseId of workout!.exerciseIds">Exercise ID: {{ exerciseId }}</li>
            </ul>
          </div>
        </mat-card-content>
        <mat-card-actions>
          <button mat-raised-button color="primary" (click)="startWorkout()">
            Start Workout
          </button>
        </mat-card-actions>
      </mat-card>
    </div>
    <div *ngIf="!workout" class="loading">
      <p>Loading workout details...</p>
    </div>
  `,
  styles: [`
    .detail-container {
      padding: 20px;
    }
    .back-btn {
      margin-bottom: 20px;
    }
    .workout-detail {
      max-width: 600px;
      margin: 0 auto;
    }
    .detail-info {
      margin: 20px 0;
    }
    .info-row {
      display: flex;
      justify-content: space-between;
      padding: 10px 0;
      border-bottom: 1px solid #e0e0e0;
    }
    .exercises-section {
      margin-top: 20px;
    }
    .loading {
      text-align: center;
      padding: 40px;
    }
  `]
})
export class WorkoutDetailComponent implements OnInit {
  workout: WorkoutPlan | null = null;
  workoutId: string | null = null;

  constructor(
    private workoutService: WorkoutService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.workoutId = params.get('id');
      if (this.workoutId) {
        this.loadWorkout(this.workoutId);
      }
    });
  }

  loadWorkout(id: string) {
    this.workoutService.getWorkout(parseInt(id)).subscribe({
      next: (data) => {
        this.workout = data;
      },
      error: (err) => console.error('Error loading workout:', err)
    });
  }

  startWorkout() {
alert(`Starting workout: ${this.workout!.title}`;
      }
