import { Route } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// Pour que le composant enfant home charge par defaut
export const APP_ROUTE: Route[] = [
  { path: '', loadChildren: () => import('./auth/auth.route') },
  {
    path: 'blog',
    component: BlogComponent,
    loadChildren: () => import('./blog/blog.route'),
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    loadChildren: () => import('./dashboard/dashboard.route'),
  },
];

/**
 * Pour que chaque composant enfant de blog puisse charger
export const APP_ROUTE: Route[] = [
  {
    path: '', component: BlogComponent,
    loadChildren: () => import('./blog/blog.route').then(m=>m.BLOG_ROUTE)
  }
];
*/
