import { Injectable } from '@angular/core';
import { ApiCallService } from './api-call.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Student from '../models/Student';
@Injectable({
  providedIn: 'root',
})
export class StudentsService extends ApiCallService<Student> {
  constructor(protected override http: HttpClient) {
    super(http);
  }

  getStudent(): Observable<any> {
    return this.getData('students/list');
  }

  postStudents(body: Student): Observable<any> {
    return this.addData('students/add', body);
  }

  deleteStudent(id: number): Observable<any> {
    return this.deleteData('students/delete', id);
  }

  updateStudent(body: Student): Observable<any> {
    return this.updateData('students/update', body);
  }
}
