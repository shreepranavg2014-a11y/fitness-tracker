import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutListComponent } from './components/workout-list/workout-list.component';
import { WorkoutDetailComponent } from './components/workout-detail/workout-detail.component';
import { ProgressTrackerComponent } from './components/progress-tracker/progress-tracker.component';
import { ProfileComponent } from './components/profile/profile.component';

export const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'workouts',
    pathMatch: 'full'
  },
  {
    path: 'workouts',
    component: WorkoutListComponent,
    data: { title: 'All Workouts' }
  },
  {
    path: 'workouts/:id',
    component: WorkoutDetailComponent,
    data: { title: 'Workout Details' }
  },
  {
    path: 'progress',
    component: ProgressTrackerComponent,
    data: { title: 'Progress Tracker' }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    data: { title: 'User Profile' }
  },
  {
    path: '**',
    redirectTo: 'workouts',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
