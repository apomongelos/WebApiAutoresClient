import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClassesService {
  baseUrl = environment.baseUrl + 'classes/';

  constructor(private httpClient: HttpClient) {}

  getClassesByCourse(id: number) {
    return this.httpClient.get(this.baseUrl + id + '/course');
  }

  addClass(cl: any) {
    var data: {};
    console.log(cl);
    return this.httpClient.post(this.baseUrl, cl);
  }
  getClassById(id: number) {
    return this.httpClient.get(this.baseUrl + id);
  }
  updateClass(classId: number, cl: any) {
    return this.httpClient.put(this.baseUrl + classId, cl);
  }
}
