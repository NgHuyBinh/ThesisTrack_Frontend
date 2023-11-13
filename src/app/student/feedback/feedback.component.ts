import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { Student } from 'src/app/Models/student/student';
import { Teacher } from 'src/app/Models/teacher/teacher';
import { AuthService } from 'src/app/Services/auth/auth.service';
import { RegisterTeacherService } from 'src/app/Services/registerteacher/registerteacher.service';
import { RegisterTopicService } from 'src/app/Services/registertopic/registertopic.service';
import { StudentService } from 'src/app/Services/student/student.service';
import { TeacherService } from 'src/app/Services/teacher/teacher.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {

  // listTopic: Topic[] = [];
  student!: Student;
  teacher!: Teacher;
  showLabels = false;
  form: any;
  facultyInfo: any;

  teachers: Teacher[] = [];

  constructor(
    private fb: FormBuilder, 
    private registerTeacherService: RegisterTeacherService,
    private registerTopicService: RegisterTopicService,
    private authService: AuthService,
    private studentService: StudentService,
    private teacherService: TeacherService,
  ) {
    this.form = fb.group({
      teacher: ['', [Validators.required]],
      mark:   ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    forkJoin([

      this.studentService.getStudentByNoStudent(this.authService.getUsername()),
    ]).subscribe(([student]) => {
      this.student = student;
      this.teacher = this.student.teacher;
      this.teachers = this.teachers;
    });
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

  loadTeachersByFaculty(facultyId: number): void {
    this.teacherService.getTeachersByFaculty(facultyId)
      .subscribe(
        (data) => {
          this.teachers = data;
        },
        (error) => {
          console.error('Không thể lấy danh sách giảng viên:', error);
        }
      );
  }

}
