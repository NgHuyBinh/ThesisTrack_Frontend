import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AppConfig } from 'src/app/config/AppConfig';
import { Teacher } from 'src/app/Models/teacher/teacher';

import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http: HttpClient, private router: Router) {}

  //lấy full đường dẫn
  private getFullUrl(endpoint: string): string {
    console.log(AppConfig.baseUrl)
    return `${AppConfig.baseUrl}/${endpoint}`;
  }


  // getTeachersByFaculty(facultyId: number): Observable<Teacher[]> {
  //   return this.http.get<Teacher[]>(
  //     this.getFullUrl(`api/v1/teacher/faculty/${facultyId}`)
  //   );
  // }




  getTeachersByFaculty(facultyId: number): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(
      this.getFullUrl(`api/v1/teacher/faculty/${facultyId}`)
    ).pipe(
      catchError((error) => {
        console.error('Error while fetching teachers:', error);
        // Hiển thị thông báo lỗi cho người dùng nếu cần
        // return an observable, e.g., of([]) to provide a default value or empty list
        return throwError('Không thể lấy danh sách giảng viên. Vui lòng thử lại sau.');
      })
    );
  }
  
}
