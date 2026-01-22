import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ProgressService } from '../../services/progress.service';
import { ProgressLog } from '../../models/progress-log';

@Component({
  selector: 'app-progress-tracker',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  template: `
    <div class="progress-container">
      <h2>Progress Tracker</h2>
      <mat-card class="add-log-card">
        <mat-card-title>Log Your Progress</mat-card-title>
        <mat-card-content>
          <div class="form-row">
            <mat-form-field appearance="fill">
              <mat-label>Workout ID</mat-label>
              <input matInput type="number" [(ngModel)]="newLog.workoutId" placeholder="Enter workout ID">
            </mat-form-field>
            <mat-form-field appearance="fill">
              <mat-label>Duration (mins)</mat-label>
              <input matInput type="number" [(ngModel)]="newLog.duration" placeholder="Enter duration">
            </mat-form-field>
            <mat-form-field appearance="fill">
              <mat-label>Calories Burned</mat-label>
              <input matInput type="number" [(ngModel)]="newLog.caloriesBurned" placeholder="Enter calories">
            </mat-form-field>
          </div>
          <button mat-raised-button color="primary" (click)="logProgress()" class="log-btn">
            Log Progress
          </button>
        </mat-card-content>
      </mat-card>
      <mat-card class="progress-logs">
        <mat-card-title>Recent Logs</mat-card-title>
        <mat-card-content>
          <table mat-table [dataSource]="progressLogs" class="progress-table">
            <ng-container matColumnDef="workoutId">
              <th mat-header-cell *matHeaderCellDef>Workout ID</th>
              <td mat-cell *matCellDef="let log">{{ log?.workoutId }}</td>
            </ng-container>
            <ng-container matColumnDef="duration">
              <th mat-header-cell *matHeaderCellDef>Duration (mins)</th>
              <td mat-cell *matCellDef="let log">{{ log?.duration }}</td>
            </ng-container>
            <ng-container matColumnDef="calories">
              <th mat-header-cell *matHeaderCellDef>Calories Burned</th>
              <td mat-cell *matCellDef="let log">{{ log?.caloriesBurned }}</td>
            </ng-container>
            <ng-container matColumnDef="date">
              <th mat-header-cell *matHeaderCellDef>Date</th>
              <td mat-cell *matCellDef="let log">{{ log?.logDate | date: 'short' }}</td>
            </ng-container>
            <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
            <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
          </table>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .progress-container {
      padding: 20px;
    }
    .add-log-card {
      margin-bottom: 20px;
    }
    .form-row {
      display: flex;
      gap: 20px;
      margin-bottom: 20px;
      flex-wrap: wrap;
    }
    mat-form-field {
      flex: 1;
      min-width: 200px;
    }
    .log-btn {
      width: 100%;
    }
    .progress-logs {
      margin-top: 20px;
    }
    .progress-table {
      width: 100%;
    }
  `]
})
export class ProgressTrackerComponent implements OnInit {
  progressLogs: ProgressLog[] = [];
  displayedColumns: string[] = ['workoutId', 'duration', 'calories', 'date'];
  newLog: Partial<ProgressLog> = {};

  constructor(private progressService: ProgressService) {}

  ngOnInit() {
    this.loadProgressLogs();
  }

  loadProgressLogs() {
    this.progressService.getAllLogsLogs().subscribe({
      next: (data) => {
        this.progressLogs = data;
      },
      error: (err) => console.error('Error loading progress logs:', err)
    });
  }

  logProgress() {
    if (this.newLog.workoutId && this.newLog.duration && this.newLog.caloriesBurned) {
      const logEntry: ProgressLog = {
        id: Date.now(),
        workoutId: this.newLog.workoutId as number,
        duration: this.newLog.duration as number,
        caloriesBurned: this.newLog.caloriesBurned as number,
        logDate: new Date()
      };
      this.progressService.createProgressLog(logEntry).subscribe({
        next: (data) => {
          this.progressLogs.push(data);
          this.newLog = {};
        },
        error: (err) => console.error('Error logging progress:', err)
      });
    }
  }
}
