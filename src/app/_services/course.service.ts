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
}
