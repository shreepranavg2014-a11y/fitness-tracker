// src/app/models/progress-log.ts

export interface ProgressLog {
  id: number;
  date: string;               // ISO date string (YYYY-MM-DD)
  userId: number;             // FK to User
  workoutPlanId: number;      // FK to WorkoutPlan
  actualCalories?: number;    // actual calories burned
  durationMinutes?: number;   // actual workout duration
  completed: boolean;         // was workout completed?
  difficulty?: 'Easy' | 'Medium' | 'Hard';
  notes?: string;             // user notes/feedback
  rating?: number;            // 1-5 difficulty rating
  mood?: string;              // user's mood during workout
  createdAt?: string;
  updatedAt?: string;
}
