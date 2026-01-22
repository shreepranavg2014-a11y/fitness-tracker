import { Component, OnInit } from '@angular/core';
import { WorkoutDataService, Workout } from '../../services/workout-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css']
})
export class WorkoutsComponent implements OnInit {
  workouts: Workout[] = [];
  filteredWorkouts: Workout[] = [];
  selectedCategory: string = 'All';
  searchTerm: string = '';
  categories: string[] = ['All', 'Strength', 'Cardio', 'Flexibility'];

  constructor(private dataService: WorkoutDataService, private router: Router) {}

  ngOnInit(): void {
    this.dataService.getWorkouts().subscribe(data => {
      this.workouts = data;
      this.filterWorkouts();
    });
  }

  filterWorkouts(): void {
    this.filteredWorkouts = this.workouts.filter(w => {
      const matchesCategory = this.selectedCategory === 'All' || w.category === this.selectedCategory;
      const matchesSearch = w.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }

  onCategoryChange(category: string): void {
    this.selectedCategory = category;
    this.filterWorkouts();
  }

  onSearchChange(term: string): void {
    this.searchTerm = term;
    this.filterWorkouts();
  }

  startWorkout(workout: Workout): void {
    this.router.navigate(['/workouts', workout.id]);
  }
}
