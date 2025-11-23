import { Component } from '@angular/core';
import { TeacherProfileComponent } from './teacher-public-page/teacher-public-page';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TeacherProfileComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'teacher-profile';
}