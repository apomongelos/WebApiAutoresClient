import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/_services/course.service';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css'],
})
export class UpdateCourseComponent implements OnInit {
  updateCourseForm: FormGroup;
  courseId: number;

  constructor(
    private courseService: CourseService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activateRouterService: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activateRouterService.queryParams.subscribe((param) => {
      this.courseId = param.courseId;
    });

    this.courseService.getCourseById(this.courseId).subscribe({
      //next (paso exitoso)
      next: (course) =>
        (this.updateCourseForm = this.formBuilder.group({
          name: [course['name'], Validators.required],
          description: [course['description'], Validators.required],
          beginDate: [course['beginDate'], Validators.required],
          endDate: [course['endDate'], Validators.required],
        })),
      //nombre | (nombre) | () => { line1; line2 }
      //error (paso erroneo)
      error: (error) => console.log(error),
      //complete (paso sí o sí)
      complete: () => console.log('complete'),
    });

    this.updateCourseForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      beginDate: ['', Validators.required],
      endDate: ['', Validators.required],
    });
  }

  submit() {
    const course = this.updateCourseForm.value;
    if (this.updateCourseForm.valid) {
      console.log(course);
      this.courseService.updateCourse(this.courseId, course).subscribe({
        //next (paso exitoso)
        next: (course) => this.router.navigate(['/courses']),
        //nombre | (nombre) | () => { line1; line2 }
        //error (paso erroneo)
        error: (error) => console.log(error),
        //complete (paso sí o sí)
        complete: () => console.log('complete'),
      });
    }
  }
}
