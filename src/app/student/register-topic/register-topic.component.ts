import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Student } from 'src/app/Models/student/student';
import { AuthService } from 'src/app/Services/auth/auth.service';
import { RegisterTopicService } from 'src/app/Services/registertopic/registertopic.service';

import { forkJoin } from 'rxjs';
import { StudentService } from 'src/app/Services/student/student.service';
import { Teacher } from 'src/app/Models/teacher/teacher';
import { TopicService } from 'src/app/Services/topic/topic.service';
import { Topic } from 'src/app/Models/topic/topic';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register-topic',
  templateUrl: './register-topic.component.html',
  styleUrls: ['./register-topic.component.css']
})
export class RegisterTopicComponent implements OnInit {
  listTopic: Topic[] = [];
  student!: Student;
  teacher!: Teacher;
  // form: FormGroup;
  showLabels = false;
  // customTopic = '';
  form: any;
  constructor(
    fb: FormBuilder, 
    private registerTopicService: RegisterTopicService,
    private authService: AuthService,
    private studentService: StudentService,
    private topicService: TopicService,
  ) {
    this.form = fb.group({
      topic: ['', [Validators.required]],
      topicName: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    forkJoin([
      
      this.studentService.getStudentByNoStudent(this.authService.getUsername()),
    ]).subscribe(([student]) => {
      this.student = student;
      this.teacher = this.student.teacher;
      this.topicService.getAllTopic(this.student.teacher.id).subscribe({
        next: (response: Topic[]) => {
          this.listTopic = response;
        },
        error: (error) =>  {

        }
      })
      
    });
  }

  changeShow() {
    this.showLabels = !this.showLabels;
  }

  getStudentInfo(studentNumber: string): void {
    console.log(studentNumber);
    this.registerTopicService.getStudentByNoStudent(studentNumber).subscribe({
      next: (data) => {
        console.log(data);
        this.student = data;
        console.log(this.student);
      },
      error: (error) => {
        console.error('Error fetching student info:', error);
      },
    });
  }
  registerTopic() {
    if(this.form.value.topicName && !this.form.value.topic) {
      this.registerTopicService.registerTopic({
        "student": {
          "id":this.student.id
        },
        "topicName" : this.form.value.topicName
      }
      ).subscribe({
        next:(response :any) => {
          Swal.fire("Thành công","Bạn đã đăng ký đề tài thành công","success");
          this.form.reset();
        },
        error: (error) => {
          Swal.fire("Có lỗi xảy ra",error.error.message,"error");
        }
      })
    } 
    if(!this.form.value.topicName && this.form.value.topic) {
      this.registerTopicService.registerTopic({
        "student": {
          "id":this.student.id
        },
        "topic":{
          "id" :  this.form.value.topic
      },
      }
      ).subscribe({
        next:(response :any) => {
          Swal.fire("Thành công","Bạn đã đăng ký đề tài thành công","success");
          this.form.reset();
        },
        error: (error) => {
          Swal.fire("Có lỗi xảy ra",error.error.message,"error");
        }
      })
    }
  }
}
