import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export abstract class ApiCallService<T> {
  constructor(protected http: HttpClient) {}
  getData(params: string): Observable<T> {
    return this.http.get<T>(environment.apiCrud + params);
  }

  addData(params: string, body: T): Observable<T> {
    return this.http.post<T>(`${environment.apiCrud}${params}`, body);
  }

  deleteData(params: string, id: number) {
    return this.http.delete<T>(`${environment.apiCrud}${params}/${id}`);
  }

  updateData(params: string, body: T) {
    return this.http.patch<T>(`${environment.apiCrud}${params}`, body);
  }
}
