import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProgressLog } from '../models/progress-log';

@Injectable({ providedIn: 'root' })
export class ProgressService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  // Get all progress logs
  getAllLogs(): Observable<ProgressLog[]> {
    return this.http.get<ProgressLog[]>(`${this.apiUrl}/progressLogs`);
  }

  // Get logs for a user
  getUserLogs(userId: number): Observable<ProgressLog[]> {
    return this.http.get<ProgressLog[]>(`${this.apiUrl}/progressLogs?userId=${userId}`);
  }

  // Get logs for a specific workout
  getWorkoutLogs(workoutId: number): Observable<ProgressLog[]> {
    return this.http.get<ProgressLog[]>(`${this.apiUrl}/progressLogs?workoutPlanId=${workoutId}`);
  }

  // Add new progress log
  addLog(log: Omit<ProgressLog, 'id'>): Observable<ProgressLog> {
    return this.http.post<ProgressLog>(`${this.apiUrl}/progressLogs`, log);
  }

  // Update progress log
  updateLog(id: number, log: Partial<ProgressLog>): Observable<ProgressLog> {
    return this.http.put<ProgressLog>(`${this.apiUrl}/progressLogs/${id}`, log);
  }

  // Delete progress log
  deleteLog(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/progressLogs/${id}`);
  }

  // Get stats: total calories burned for user
  getUserStats(userId: number): Observable<ProgressLog[]> {
    return this.http.get<ProgressLog[]>(`${this.apiUrl}/progressLogs?userId=${userId}`);
  }
}
