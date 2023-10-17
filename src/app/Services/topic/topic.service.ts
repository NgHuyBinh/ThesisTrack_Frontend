import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Topic } from 'src/app/Models/topic/topic';
import { AppConfig } from 'src/app/config/AppConfig';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private http: HttpClient, private router: Router) {}

  //lấy full đường dẫn
  private getFullUrl(endpoint: string): string {
    console.log(AppConfig.baseUrl)
    return `${AppConfig.baseUrl}/${endpoint}`;
  }
  
  getAllTopic(teacherId: number): Observable<Topic[]>{
    return this.http.get<Topic[]>(
      this.getFullUrl(`api/v1/topics/teacher/${teacherId}`)
    );
  }
}
