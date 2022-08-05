import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClassesService } from 'src/app/_services/classes.service';

@Component({
  selector: 'app-udpate-class',
  templateUrl: './udpate-class.component.html',
  styleUrls: ['./udpate-class.component.css'],
})
export class UdpateClassComponent implements OnInit {
  courseId: number;
  classId: number;
  updateClassForm: FormGroup;

  constructor(
    private router: Router,
    private activateRouterService: ActivatedRoute,
    private formBuilder: FormBuilder,
    private classService: ClassesService
  ) {}

  ngOnInit(): void {
    this.activateRouterService.queryParams.subscribe((param) => {
      this.courseId = param.courseId;
      this.classId = param.classId;
    });

    this.classService.getClassById(this.classId).subscribe({
      //next (paso exitoso)
      next: (cl) =>
        (this.updateClassForm = this.formBuilder.group({
          title: [cl['title'], Validators.required],
          description: [cl['description'], Validators.required],
          beginDate: [cl['beginDate'], Validators.required],
          endDate: [cl['endDate'], Validators.required],
        })),
      //nombre | (nombre) | () => { line1; line2 }
      //error (paso erroneo)
      error: (error) => console.log(error),
      //complete (paso sí o sí)
      complete: () => console.log('complete'),
    });
    this.updateClassForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      beginDate: ['', Validators.required],
      endDate: ['', Validators.required],
    });
  }
  submit() {
    const cl = this.updateClassForm.value;
    if (this.updateClassForm.valid) {
      console.log(cl);
      this.classService.updateClass(this.classId, cl).subscribe({
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
