import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',

    redirectTo: '/courses',

    pathMatch: 'full',
  },

  {
    path: 'courses',

    loadComponent: () =>
      import('./components/courses/courses').then((m) => m.CoursesComponent),
  },

  {
    path: 'my-enrollments',

    loadComponent: () =>
      import('./components/my-enrollments/my-enrollments').then(
        (m) => m.MyEnrollmentsComponent
      ),
  },
];
