import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppConfig } from 'src/app/config/AppConfig';

@Injectable({
  providedIn: 'root'
})
export class TeachingscheduleService {
  constructor(private http: HttpClient, private router: Router) {}

  listQuantity: number[] = [];

  //lấy full đường dẫn
  private getFullUrl(endpoint: string): string {
    console.log(AppConfig.baseUrl)
    return `${AppConfig.baseUrl}/${endpoint}`;
  }

  getAllTeachingSchedule() : Observable<any[]>{
    // const url = this.getFullUrl(`api/v1/teachingschedule/all`);
    // return this.http.get<any[]>(url);
    
    return this.http.get<any[]>(this.getFullUrl(`api/v1/teachingschedule/all`));
  }
 }
