# Fitness & Workout Tracker - Angular 17 SPA

## Project Overview
A modern single-page application (SPA) for fitness/workout tracking using Angular v17, TypeScript, Angular Material, and JSON Server as mock backend.

## Features
- Browse workout plans with difficulty levels
- View detailed exercises for each workout
- Track workout progress and logs
- User profile management
- Data visualization with charts
- Responsive Material Design UI
- Mock REST API with JSON Server

## Tech Stack
- **Angular**: v17 (latest)
- **TypeScript**: Strict typing with interfaces
- **Angular Material**: UI components
- **RxJS**: Observable patterns
- **JSON Server**: Mock backend API
- **ngx-charts**: Data visualization

## File Structure
```
fitness-tracker/
├── src/
│   ├── app/
│   │   ├── models/          # TS interfaces
│   │   ├── services/        # Business logic & data
│   │   ├── components/      # UI components
│   │   ├── app.module.ts
│   │   └── app-routing.module.ts
│   ├── assets/
│   │   └── data/           # db.json (mock data)
│   └── index.html
├── angular.json
├── package.json
└── tsconfig.json
```

## Installation & Setup
1. Clone the repository
2. Install dependencies: `npm install`
3. Start the app: `npm start`
4. Start JSON Server: `npm run server`
5. Open: http://localhost:4200

## API Endpoints
- GET /workouts - Get all workouts
- GET /workouts/:id - Get single workout
- GET /exercises - Get all exercises
- POST /progressLogs - Log workout progress

## Components
- **NavbarComponent**: Top navigation bar
- **WorkoutListComponent**: Display all workouts
- **WorkoutDetailComponent**: Show workout exercises
- **ProgressTrackerComponent**: Progress charts & logs
- **ProfileComponent**: User profile management

## Development
Prepared for Christ University (AI & Data Science Engineering)
Course: Full-Stack Web Development
