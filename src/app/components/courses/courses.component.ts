import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/_services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses: any;

  constructor(private coursesService: CourseService) {}

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses() {
    this.coursesService.getCourses().subscribe({
      //next (paso exitoso)
      next: (courses) => {
        console.log(courses);
        this.courses = courses;
        console.log(this.courses);
      },
      //nombre | (nombre) | () => { line1; line2 }
      //error (paso erroneo)
      error: (error) => {
        console.log(error);
      },
      //complete (paso sí o sí)
      complete: () => console.log('complete'),
    });
  }
}
