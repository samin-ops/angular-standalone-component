import { Route } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DocsComponent } from './docs/docs.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { HomeComponent } from './home/home.component';

export default [
  // {
  //   path: 'home',
  //   loadComponent: () => import('./home/home.component')
  //    .then(c => c.HomeComponent),// Pour que le composant enfant home charge par defaut: lazy loading
  // },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'docs', component: DocsComponent },
  { path: 'form', component: FormulaireComponent },
  //{path:'', redirectTo:'/home',pathMatch:'full'}
] as Route[];

/**
 * Pour que chaque composant enfant de blog puisse charger
 *
 * export const BLOG_ROUTE: Route[] = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {path:'docs', component:DocsComponent},
]

 */
