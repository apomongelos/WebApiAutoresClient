import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassesComponent } from './components/classes/classes.component';
import { CreateClassComponent } from './components/classes/create-class/create-class.component';
import { UdpateClassComponent } from './components/classes/udpate-class/udpate-class.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CreateCourseComponent } from './components/courses/create-course/create-course.component';
import { UpdateCourseComponent } from './components/courses/update-course/update-course.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './_guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      { path: 'courses', component: CoursesComponent },
      {
        path: 'courses/add',
        component: CreateCourseComponent,
      },
      { path: 'courses/update', component: UpdateCourseComponent },
      { path: 'courses/classes', component: ClassesComponent },
      { path: 'courses/classes/edit', component: UdpateClassComponent },
      { path: 'courses/classes/add', component: CreateClassComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
