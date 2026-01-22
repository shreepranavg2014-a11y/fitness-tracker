import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Workout {
  id: string; name: string; category: string;
  duration: number; difficulty: string; calories: number;
  description: string; exercises: string[]; image: string;
}

export interface ProgressLog {
  id: string; workoutId: string; workoutName: string;
  duration: number; caloriesBurned: number; date: Date; notes: string;
}

export interface UserProfile {
  name: string; age: number; weight: number; height: number;
  fitnessGoal: string; totalWorkouts: number; totalCalories: number; streak: number;
}

@Injectable({ providedIn: 'root' })
export class WorkoutDataService {
  private workouts: Workout[] = [
    { id: '1', name: 'Full Body Strength', category: 'Strength', duration: 60, difficulty: 'Intermediate', calories: 450, description: 'Complete full body workout', exercises: ['Squats', 'Deadlifts', 'Bench Press'], image: '💪' },
    { id: '2', name: 'Cardio Blast', category: 'Cardio', duration: 45, difficulty: 'Advanced', calories: 550, description: 'HIIT training', exercises: ['Running', 'Burpees', 'Jump Rope'], image: '🏃' },
    { id: '3', name: 'Yoga Flow', category: 'Flexibility', duration: 50, difficulty: 'Beginner', calories: 200, description: 'Relaxing yoga', exercises: ['Sun Salutation', 'Warrior Pose'], image: '🧘' },
    { id: '4', name: 'Core Crusher', category: 'Strength', duration: 30, difficulty: 'Intermediate', calories: 300, description: 'Core workout', exercises: ['Planks', 'Crunches'], image: '🔥' },
    { id: '5', name: 'Leg Day', category: 'Strength', duration: 50, difficulty: 'Advanced', calories: 500, description: 'Leg workout', exercises: ['Squats', 'Lunges'], image: '🦵' },
    { id: '6', name: 'Pilates', category: 'Flexibility', duration: 45, difficulty: 'Intermediate', calories: 250, description: 'Pilates session', exercises: ['Roll-up', 'Hundred'], image: '✨' }
  ];

  private progressLogs: ProgressLog[] = [
    { id: '1', workoutId: '1', workoutName: 'Full Body Strength', duration: 60, caloriesBurned: 450, date: new Date('2024-01-20'), notes: 'Great session' },
    { id: '2', workoutId: '2', workoutName: 'Cardio Blast', duration: 45, caloriesBurned: 550, date: new Date('2024-01-19'), notes: 'Challenging' }
  ];

  private userProfile: UserProfile = { name: 'Alex Johnson', age: 28, weight: 75, height: 180, fitnessGoal: 'Build Muscle', totalWorkouts: 42, totalCalories: 18900, streak: 12 };
  private workoutsSubject = new BehaviorSubject<Workout[]>(this.workouts);
  private progressLogsSubject = new BehaviorSubject<ProgressLog[]>(this.progressLogs);
  private userProfileSubject = new BehaviorSubject<UserProfile>(this.userProfile);

  constructor() {}
  getWorkouts(): Observable<Workout[]> { return this.workoutsSubject.asObservable(); }
  getWorkoutById(id: string): Workout | undefined { return this.workouts.find(w => w.id === id); }
  getProgressLogs(): Observable<ProgressLog[]> { return this.progressLogsSubject.asObservable(); }
  addProgressLog(log: any): void {
    const newLog = { ...log, id: Date.now().toString() };
    this.progressLogs.unshift(newLog);
    this.progressLogsSubject.next([...this.progressLogs]);
  }
  getUserProfile(): Observable<UserProfile> { return this.userProfileSubject.asObservable(); }
  updateUserProfile(profile: Partial<UserProfile>): void {
    this.userProfile = { ...this.userProfile, ...profile };
    this.userProfileSubject.next(this.userProfile);
  }
}
