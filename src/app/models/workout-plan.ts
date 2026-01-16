// src/app/models/workout-plan.ts

export type DifficultyLevel = 'Easy' | 'Medium' | 'Hard';

export interface WorkoutPlan {
  id: number;
  title: string;
  description?: string;
  duration: number;              // in minutes
  difficulty: DifficultyLevel;
  caloriesBurned?: number;        // estimated
  targetMuscleGroup?: string[];   // e.g., ['Chest', 'Triceps']
  imageUrl?: string;
  createdAt?: string;
  updatedAt?: string;
}
