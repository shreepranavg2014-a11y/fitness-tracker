// src/app/models/progress-log.ts
export interface ProgressLog {
  id: number;
  workoutId: number;
  duration: number;
  caloriesBurned: number;
  logDate: Date;
}
