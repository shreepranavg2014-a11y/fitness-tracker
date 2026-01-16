// src/app/models/user.ts

export interface UserStats {
  workoutsCompleted: number;
  totalCalories: number;
  totalMinutes: number;
  currentStreak: number;
  [key: string]: any;
}

export interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  weight?: number;  // in kg
  height?: number;  // in cm
  goals: string[];
  stats: UserStats;
  createdAt?: string;
  updatedAt?: string;
}
