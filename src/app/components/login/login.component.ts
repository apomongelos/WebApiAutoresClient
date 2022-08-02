import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private auth: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  submitLogin() {
    var route = this.router;
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.auth.login(this.loginForm.value).subscribe({
        //next (paso exitoso)
        next: (user) => {
          console.log('successful register');
          route.navigate(['courses']);
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
}
