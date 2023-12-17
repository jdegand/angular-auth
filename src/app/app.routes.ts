import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';

export const routes: Routes = [
    { path: 'login', title: 'Please sign in', component: LoginComponent },
    { path: 'register', title: 'Please sign up', component: RegisterComponent },
    { path: 'profile', title: 'Profile', component: ProfileComponent },
    { path: '', title: 'Home Page', component: HomeComponent },
    { path: '**', title: '404 Not Found', component: NotFoundComponent }
];
