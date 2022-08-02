import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  user: any = {};

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    console.log(this.user);
    this.authService.login(this.user).subscribe({
      //next (paso exitoso)
      next: (user) => {
        console.log(user);
      },
      //nombre | (nombre) | () => { line1; line2 }
      //error (paso erroneo)
      error: (error) => console.log(error),
      //complete (paso sí o sí)
      complete: () => console.log('complete'),
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
