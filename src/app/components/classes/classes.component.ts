import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassesService } from 'src/app/_services/classes.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css'],
})
export class ClassesComponent implements OnInit {
  classes: any;
  courseId: number;

  constructor(
    private classesService: ClassesService,
    private router: Router,
    private activateRouterService: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activateRouterService.queryParams.subscribe((param) => {
      this.courseId = param.courseId;
    });
    this.getClasses(this.courseId);
  }

  getClasses(courseId: number) {
    this.classesService.getClassesByCourse(courseId).subscribe({
      //next (paso exitoso)
      next: (courses) => {
        console.log(courses);
        this.classes = courses;
        console.log(this.classes);
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
