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

  constructor(private http: HttpClient, private router: Router) { }

  //lấy full đường dẫn
  private getFullUrl(endpoint: string): string {
    console.log(AppConfig.baseUrl)
    return `${AppConfig.baseUrl}/${endpoint}`;
  }

  getTeacherById(id: number) : Observable<Teacher> {
    return this.http.get<Teacher>(this.getFullUrl(`api/v1/teacher/${id}`));
  }
  // getTeachersByFaculty(facultyId: number): Observable<Teacher[]> {
  //   return this.http.get<Teacher[]>(
  //     this.getFullUrl(`api/v1/teacher/faculty/${facultyId}`)
  //   );
  // }
  getTeacherByNoTeacher(noTeacher: string): Observable<Teacher> {
    const url = `${AppConfig.baseUrl}/api/v1/teacher?numberTeacher=${noTeacher}`;
    return this.http.get<Teacher>(url);
  }
  getAllTeacher(id: number) :Observable<Teacher[]> {
    return this.http.get<Teacher[]>(
      this.getFullUrl(`api/v1/teacher/all/faculty/${id}`)
    );
  }



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

  // getTeachersByFaculty(facultyId: number): Observable<any[]> {
  //   return this.http.get<any[]>(`${AppConfig.baseUrl}/api/v1/teachers/faculty/${facultyId}`);
  // }

}
