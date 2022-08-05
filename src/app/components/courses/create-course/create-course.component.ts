import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/_services/course.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css'],
})
export class CreateCourseComponent implements OnInit {
  createCourseForm: FormGroup;

  constructor(
    private courseService: CourseService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.createCourseForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      beginDate: ['', Validators.required],
      endDate: ['', Validators.required]      
    });
  }

  submit() {
    const course = this.createCourseForm.value;
    if (this.createCourseForm.valid) {
      console.log(course);
      this.courseService.addCourse(course).subscribe({
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
