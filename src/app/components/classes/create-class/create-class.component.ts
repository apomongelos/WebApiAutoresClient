import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassesService } from 'src/app/_services/classes.service';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.css'],
})
export class CreateClassComponent implements OnInit {
  createClassForm: FormGroup;
  courseId: number;

  constructor(
    private router: Router,
    private activateRouterService: ActivatedRoute,
    private formBuilder: FormBuilder,
    private classService: ClassesService
  ) {}

  ngOnInit(): void {
    this.activateRouterService.queryParams.subscribe((param) => {
      this.courseId = param.courseId;
    });

    this.createClassForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      beginDate: ['', Validators.required],
      endDate: ['', Validators.required],
    });
  }

  submit() {
    const classToCreate = this.createClassForm.value;

    if (this.createClassForm.valid) {
      console.log(classToCreate);
      classToCreate.courseId = this.courseId;
      this.classService.addClass(classToCreate).subscribe({
        //next (paso exitoso)
        next: (cl) =>
          this.router.navigate(['/courses/classes'], {
            queryParams: { courseId: this.courseId },
          }),
        //nombre | (nombre) | () => { line1; line2 }
        //error (paso erroneo)
        error: (error) => console.log(error),
        //complete (paso sí o sí)
        complete: () => console.log('complete'),
      });
    }
  }
}
