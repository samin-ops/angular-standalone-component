import { Route } from "@angular/router";
import { SignupComponent } from "./signup/signup.component";

export default [

  { path: 'login', loadComponent: ()=> import('./login/login.component').then((c)=>c.LoginComponent) },
  //{ path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },

] as Route[];// il ya aussi satisfies

