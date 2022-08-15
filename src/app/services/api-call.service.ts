import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export abstract class ApiCallService<T> {
  constructor(protected http: HttpClient) {}
  getData(params: string): Observable<any> {
    return this.http.get(environment.apiCrud + params);
  }

  addData(params: string, body: T) {
    return this.http.post(`${environment.apiCrud}${params}`, body);
  }

  deleteData(params: string, id: number) {
    return this.http.delete(`${environment.apiCrud}${params}/${id}`);
  }

  updateData(params: string, body: T) {
    return this.http.patch(`${environment.apiCrud}${params}`, body);
  }
}
