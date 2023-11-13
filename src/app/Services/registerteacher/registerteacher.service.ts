import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from 'express';
import { Observable } from 'rxjs';
import { AppConfig } from 'src/app/config/AppConfig';

@Injectable({
  providedIn: 'root'
})
export class RegisterTeacherService {

  constructor(private http: HttpClient) {}
  listQuantity: number[] = [];

  //lấy full đường dẫn
  private getFullUrl(endpoint: string): string {
    console.log(AppConfig.baseUrl)
    return `${AppConfig.baseUrl}/${endpoint}`;
  }
  
  regiterTeaccher(regiterTeacherData: any) : Observable<void> {
    const url = this.getFullUrl("api/v1/registerteacher/add");
    return this.http.post<void>(url, regiterTeacherData);
  }
}
