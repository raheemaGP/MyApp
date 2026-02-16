import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NaviComponent } from '../navi/navi.component'; 

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],


  imports: [
  RouterModule,
  NaviComponent,
  AboutComponent,
  LoginComponent
]
})
export class HomeComponent {}
