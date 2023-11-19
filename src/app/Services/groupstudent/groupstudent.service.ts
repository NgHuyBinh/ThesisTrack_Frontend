import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { AppConfig } from 'src/app/config/AppConfig';

@Injectable({
  providedIn: 'root'
})
export class GroupstudentService {

  constructor(private http: HttpClient) {}
  listQuantity: number[] = [];

  //lấy full đường dẫn
  private getFullUrl(endpoint: string): string {
    console.log(AppConfig.baseUrl)
    return `${AppConfig.baseUrl}/${endpoint}`;
  }

  getAllGroupStudent(): Observable<any[]> {
    // const url = this.getFullUrl("api/v1/feedbacks/all");
    return this.http.get<any[]>(this.getFullUrl(`api/v1/groupstudents/all`));
  }

}
