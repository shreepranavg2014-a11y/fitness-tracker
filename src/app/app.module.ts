import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Material Imports
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

// App Components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WorkoutListComponent } from './components/workout-list/workout-list.component';
import { WorkoutDetailComponent } from './components/workout-detail/workout-detail.component';
import { ProgressTrackerComponent } from './components/progress-tracker/progress-tracker.component';
import { ProfileComponent } from './components/profile/profile.component';

// Services
import { WorkoutService } from './services/workout.service';
import { UserService } from './services/user.service';
import { ProgressService } from './services/progress.service';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // Material Modules
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    // Standalone Components
    WorkoutListComponent,
    WorkoutDetailComponent,
    ProgressTrackerComponent,
    ProfileComponent
  ],
  providers: [
    WorkoutService,
    UserService,
    ProgressService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
