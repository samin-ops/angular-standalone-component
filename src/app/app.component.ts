import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';

@Component({
  selector: 'app-root',
  standalone: true, //
  imports:[CommonModule, RouterModule],//
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-standalone';
}
