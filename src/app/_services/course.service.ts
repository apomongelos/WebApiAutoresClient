import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  baseUrl = environment.baseUrl + 'courses/';

  constructor(private httpClient: HttpClient) {}

  getCourses() {
    return this.httpClient.get(this.baseUrl);
  }

  addCourse(course: any) {
    var data: {};
    console.log(course);
    return this.httpClient.post(this.baseUrl, course);
  }
  getCourseById(id: number) {
    return this.httpClient.get(this.baseUrl + id);
  }
  updateCourse(courseId: number, course: any) {
    return this.httpClient.put(this.baseUrl + courseId, course);
  }
}
