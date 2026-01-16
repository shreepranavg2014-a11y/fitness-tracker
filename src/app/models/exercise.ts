// src/app/models/exercise.ts

export interface Exercise {
  id: number;
  workoutPlanId: number;    // FK to WorkoutPlan
  name: string;
  description?: string;
  reps: number;             // repetitions
  sets: number;             // number of sets
  restSeconds?: number;     // rest time between sets
  caloriesBurned?: number;  // estimated per set
  mediaLink?: string;       // URL to video/image
  notes?: string;
  createdAt?: string;
  updatedAt?: string;
}
