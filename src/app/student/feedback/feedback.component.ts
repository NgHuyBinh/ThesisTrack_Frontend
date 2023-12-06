import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { Student } from 'src/app/Models/student/student';
import { Teacher } from 'src/app/Models/teacher/teacher';
import { AuthService } from 'src/app/Services/auth/auth.service';
import { FeedbackService } from 'src/app/Services/feedback/feedback.service';
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
    private feedbackService: FeedbackService,
  ) {
    this.form = fb.group({
      teacher: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    forkJoin([

      this.studentService.getStudentByNoStudent(this.authService.getUsername()),
    ]).subscribe(([student]) => {
      this.student = student;
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

  // subFeedback() {
  //   if(this.form.value.)
  // }
  feedbackContent!: string;
  // onSubmit() {
  //   // Log the data to the console or perform any other actions here
  //   console.log('Student:', this.student);
  //   console.log('Feedback Content:', this.feedbackContent);
  // }
  onSubmit() {
    if (this.form.valid) {
      return;
    }

    const feedbackData = {
      student: {
        id: this.student.id,
      },

      note: this.feedbackContent,
    };
    console.log(feedbackData);

    this.feedbackService.feedback(feedbackData).subscribe(
      (response) => {
        Swal.fire('Thành công', 'Bạn đã gửi phản hồi thành công!', 'success');
      },
      (error) => {
        Swal.fire('Thất bại', 'Có lỗi gửi phản hồi. Hãy thử lại sau.', 'error');
      }
    );
  }

}
