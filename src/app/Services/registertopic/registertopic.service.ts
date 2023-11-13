import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterTopic } from 'src/app/Models/registertopic/registertopic';
import { AppConfig } from 'src/app/config/AppConfig';
import { HttpClient } from '@angular/common/http';
import { Topic } from 'src/app/Models/topic/topic';
// import { StudentResponseDTO } from/

@Injectable({
  providedIn: 'root',
})
export class RegisterTopicService {
  constructor(private http: HttpClient, private router: Router) {}
  listQuantity: number[] = [];

  //lấy full đường dẫn
  private getFullUrl(endpoint: string): string {
    console.log(AppConfig.baseUrl)
    return `${AppConfig.baseUrl}/${endpoint}`;
  }

  getStudentByNoStudent(numberStudent: any): Observable<any> {
    const url = this.getFullUrl("api/v1/student");
    return this.http.post<any>(url, numberStudent);
  }
  
  registerTopic(registerTopicData: any): Observable<any> {
    const url = this.getFullUrl("api/v1/registertopic");
    return this.http.post<any>(url, registerTopicData);
  }
















}
