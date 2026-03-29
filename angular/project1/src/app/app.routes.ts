import { Routes } from '@angular/router';
import { Home } from './home/home';
import { GeitsComponent } from './geits/geits';

export const routes: Routes = [
  { path: 'geits', component: GeitsComponent },
  { path: '', component: Home }
];


