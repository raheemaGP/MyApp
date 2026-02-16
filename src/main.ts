import { bootstrapApplication } from '@angular/platform-browser';
import { HomeComponent } from './app/comp/home/home.component';

bootstrapApplication(HomeComponent)
  .catch(err => console.error(err))