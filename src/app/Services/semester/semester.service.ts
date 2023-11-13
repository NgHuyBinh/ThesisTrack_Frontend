import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Semester } from 'src/app/Models/semester/semester';
import { AppConfig } from 'src/app/config/AppConfig';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SemesterService {

  constructor(private http: HttpClient) {}
  listQuantity: number[] = [];

  //lấy full đường dẫn
  private getFullUrl(endpoint: string): string {
    console.log(AppConfig.baseUrl)
    return `${AppConfig.baseUrl}/${endpoint}`;
  }

  getSemesterByCurrentDate() : Observable<Semester> {
    const url = this.getFullUrl("api/v1/semesters");
    return this.http.get<Semester>(url);
  }
}
