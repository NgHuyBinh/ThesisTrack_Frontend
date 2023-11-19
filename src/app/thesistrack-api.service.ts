// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ThesistrackApiService {
//   private apiUrl = 'http://your-api-url'; // Thay đổi thành URL thực tế của API Spring Boot

//   constructor(private http: HttpClient) { }

//   // Phương thức để gọi API từ Spring Boot

//   // Ví dụ: Lấy dữ liệu từ API
//   getData(): Observable<any> {
//     return this.http.get(`${this.apiUrl}/endpoint`);
//   }

//   // Ví dụ: Gửi dữ liệu lên API
//   postData(data: any): Observable<any> {
//     return this.http.post(`${this.apiUrl}/endpoint`, data);
//   }

//   // Thêm các phương thức khác tương tự cho các chức năng API khác
// }
