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
import { TeacherService } from 'src/app/Services/teacher/teacher.service';
import { SemesterService } from 'src/app/Services/semester/semester.service';
import { Semester } from 'src/app/Models/semester/semester';
import { RegisterTeacherService } from 'src/app/Services/registerteacher/registerteacher.service';
import { RegisterTeacher } from 'src/app/Models/registerteacher/registerteacher';
import { RegisterTopic } from 'src/app/Models/registertopic/registertopic';
@Component({
  selector: 'app-register-topic',
  templateUrl: './register-topic.component.html',
  styleUrls: ['./register-topic.component.css']
})
export class RegisterTopicComponent implements OnInit {
  listTopic: Topic[] = [];
  listTopic1: Topic[] = [];
  student!: Student;
  teacher!: Teacher;
  teacherTopic: Teacher[] = [];

  semester!: Semester;
  facultyInfo: any;
  teachers: Teacher[] = [];
  // form: FormGroup;
  showLabels = false;
  // customTopic = '';
  form: any;
  registers: RegisterTeacher[] = [];
  registerT!: RegisterTopic;
  constructor(
    fb: FormBuilder,
    private registerTopicService: RegisterTopicService,
    private registerTeacherService: RegisterTeacherService,
    private authService: AuthService,
    private studentService: StudentService,
    private topicService: TopicService,
    private teacherService: TeacherService,
    private semesterService: SemesterService,
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
      this.getRegisterTopicByStudentId(this.student.id);
      this.registerTeacherService.getRegisterByStudentId(this.student.id).subscribe({
        next: (response: RegisterTeacher[]) => {
          this.registers = response;
          this.registers.forEach((r) => {
            if(r.status == 1) {
              this.teacher = r.teacher;
              this.getAllTopicByTeacherId(this.teacher.id);
              
            }
          })
        },
        error: (error) => {

        }
      })
      this.semesterService.getSemesterByCurrentDate().subscribe({
        next: (response: Semester) => {
          this.semester = response;
        },
        error: (error) => {
        },
  
      });


    });
  }
  getAllTopicByTeacherId(id: number){
    this.topicService.getAllTopic(id).subscribe({
      next: (response: Topic[]) => {
        this.listTopic = response;

      },
      error: (error) => {

      }
    })
  }
  getRegisterTopicByStudentId(id: number) {
    this.registerTopicService.getRegisterByStudentId(id).subscribe({
      next: (response: RegisterTopic) => {
        this.registerT = response
      },
      error: (error) => {

      }
    })
  }

  changeShow() {
    this.showLabels = !this.showLabels;

  }


  getStudentInfo(studentNumber: string): void {
    console.log(studentNumber);
    this.registerTopicService.getStudentByNoStudent(studentNumber).subscribe({
      next: (data) => {
        this.student = data;
      },
      error: (error) => {
        console.error('Error fetching student info:', error);
      },
    });
  }

  registerTopic() {
    if (this.form.value.topicName && !this.form.value.topic) {
      this.registerTopicService.registerTopic({
        "student": {
          "id": this.student.id
        },
        "topicName": this.form.value.topicName
      }
      ).subscribe({
        next: (response: any) => {
          Swal.fire("Thành công", "Bạn đã đăng ký đề tài thành công", "success");
          this.form.reset();
          this.form.value.topicName = undefined;
        },
        error: (error) => {
          Swal.fire("Có lỗi xảy ra", error.error.message, "error");
          this.form.value.topicName = undefined;
        }
      })
    }
    if (!this.form.value.topicName && this.form.value.topic) {
      this.registerTopicService.registerTopic({
        "student": {
          "id": this.student.id
        },
        "topic": {
          "id": this.form.value.topic
        }


      }
      ).subscribe({
        next: (response: any) => {
          Swal.fire("Thành công", "Bạn đã đăng ký đề tài thành công", "success");
          this.form.reset();
          this.form.value.topicName = undefined;
        },
        error: (error) => {
          Swal.fire("Có lỗi xảy ra", error.error.message, "error");
          this.form.value.topicName = undefined;
        }
      })
    }
  }

}
