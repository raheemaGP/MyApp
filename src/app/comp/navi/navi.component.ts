import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navi',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav style="background-color:#ffb6c1; padding:10px; text-align:center;">
      <a href="#" style="margin: 0 10px; color:white; text-decoration:none;">Home</a>
      <a href="#" style="margin: 0 10px; color:white; text-decoration:none;">About</a>
      <a href="#" style="margin: 0 10px; color:white; text-decoration:none;">Login</a>
    </nav>
  `
})
export class NaviComponent {}
