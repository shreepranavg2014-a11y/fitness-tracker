import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { WorkoutPlan } from '../models/workout-plan';
import { Exercise } from '../models/exercise';

@Injectable({ providedIn: 'root' })
export class WorkoutService {
  private apiUrl = 'http://localhost:3000';
  private workoutsSubject = new BehaviorSubject<WorkoutPlan[]>([]);
  public workouts$ = this.workoutsSubject.asObservable();

  constructor(private http: HttpClient) {}

  // Get all workouts
  getWorkouts(): Observable<WorkoutPlan[]> {
    return this.http.get<WorkoutPlan[]>(`${this.apiUrl}/workouts`);
  }

  // Get single workout by ID
  getWorkout(id: number): Observable<WorkoutPlan> {
    return this.http.get<WorkoutPlan>(`${this.apiUrl}/workouts/${id}`);
  }

  // Create new workout
  addWorkout(workout: Omit<WorkoutPlan, 'id'>): Observable<WorkoutPlan> {
    return this.http.post<WorkoutPlan>(`${this.apiUrl}/workouts`, workout);
  }

  // Update workout
  updateWorkout(id: number, workout: Partial<WorkoutPlan>): Observable<WorkoutPlan> {
    return this.http.put<WorkoutPlan>(`${this.apiUrl}/workouts/${id}`, workout);
  }

  // Delete workout
  deleteWorkout(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/workouts/${id}`);
  }

  // Get exercises for a workout
  getExercisesByWorkout(workoutId: number): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(`${this.apiUrl}/exercises?workoutPlanId=${workoutId}`);
  }

  // Get all exercises
  getAllExercises(): Observable<Exercise[]> {
    return this.http.get<Exercise[]>(`${this.apiUrl}/exercises`);
  }
}
