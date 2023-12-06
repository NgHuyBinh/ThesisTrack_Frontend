import { Component, OnInit } from '@angular/core';
import { Topic } from '../../Models/topic/topic';
import { Student } from '../../Models/student/student';
import { Teacher } from '../../Models/teacher/teacher';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterTopicService } from '../../Services/registertopic/registertopic.service';
import { AuthService } from '../../Services/auth/auth.service';
import { StudentService } from '../../Services/student/student.service';
import { TopicService } from '../../Services/topic/topic.service';
import { forkJoin } from 'rxjs';
import Swal from 'sweetalert2';
import { TeacherService } from '../../Services/teacher/teacher.service';
import { RegisterTeacherService } from 'src/app/Services/registerteacher/registerteacher.service';
import { SemesterService } from 'src/app/Services/semester/semester.service';
import { Semester } from 'src/app/Models/semester/semester';
import { RegisterTeacher } from 'src/app/Models/registerteacher/registerteacher';
// import { RegisterTeacherService} from '../../Services/registerteacher/registerteacher.service';


@Component({
  selector: 'app-register-teacher',
  templateUrl: './register-teacher.component.html',
  styleUrls: ['./register-teacher.component.css']
})
export class RegisterTeacherComponent implements OnInit {

  listTopic: Topic[] = [];
  student!: Student;
  teacher!: Teacher;
  teacherId: number = 0;
  showLabels = false;
  form: any;
  facultyInfo: any;
  semester!: Semester;
  teachers: Teacher[] = [];
  mark: number = 0;
  register: RegisterTeacher[] = [];
  teacherTopic: Teacher[] = [];
  constructor(
    private fb: FormBuilder,
    private registerTeacherService: RegisterTeacherService,
    private registerTopicService: RegisterTopicService,
    private authService: AuthService,
    private studentService: StudentService,
    private teacherService: TeacherService,
    private semesterService: SemesterService,
    private topicService: TopicService,
  ) {
    this.form = fb.group({
      teacher: ['', [Validators.required]],
      mark: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    
    this.getStudentByNoStudent();

    this.semesterService.getSemesterByCurrentDate().subscribe({
      next: (response: Semester) => {
        this.semester = response;
      },
      error: (error) => {
      },

    });
  }
  getStudentByNoStudent() {
    this.studentService.getStudentByNoStudent(this.authService.getUsername()).subscribe({
      next: (response: Student) => {
        this.student = response;
        this.getRegisterByStudentId();
        this.getAllTeachers(this.student.faculty.id);
      },
      error: (error) => {

      }
    })
  }
  getAllTeachers(id: number) {
    this.teacherService.getAllTeacher(id).subscribe({
      next: (response: Teacher[]) => {
        this.teachers = response;
        
        
      },
      error:(error) => {

      }
    })
  }
  // }

  // // Hàm gửi đăng ký giảng viên
  registerTeacher() {
    if (this.mark == 0) {
      Swal.fire('Thất bại', 'Vui lòng nhập điểm số', 'error');
      return;
    }
    if (this.teacherId == 0) {
      Swal.fire('Thất bại', 'Vui lòng chọn giảng viên', 'error');
      return;
    }
    let object = {
      "student": {
        "id": this.student.id
      },
      "teacher": {
        "id": this.teacherId
      },
      "semester": {
        "id": this.semester.id
      },
      "mark": this.mark
    }
    this.registerTeacherService.regiterTeaccher(object).subscribe({
      next: (response: void) => {
        Swal.fire("Thành công", 'Bạn đã đăng ký thành công', 'success');
        this.getRegisterByStudentId();
      },
      error: (error) => {
        Swal.fire("Thất bại", error.error.message, 'error');
      }
    })
  }
  
  getRegisterByStudentId() {
    this.registerTeacherService.getRegisterByStudentId(this.student!.id).subscribe({
      next: (response: RegisterTeacher[]) => {
        this.register = response;
      },
      error: (error) => {

      }
    })
  }


  // getkhoa() {
  //   this.studentService.getStudentByNoStudent(this.authService.getUsername()).subscribe((res) => {
  //     this.studentService.getFacultyByNumberStudent(res.id).subscribe((data) => {
  //       this.facultyInfo = {
  //         // id: this.student.faculty.id, 
  //         id: data,
  //         name: 'Tên khoa',
  //       };
  //       this.loadTeachersByFaculty(this.facultyInfo.id);
  //     })
  //   })
  // }

  // getStudentInfo(studentNumber: string): void {
  //   console.log(studentNumber);
  //   this.registerTopicService.getStudentByNoStudent(studentNumber).subscribe({
  //     next: (data) => {
  //       console.log(data);
  //       this.student = data;
  //       console.log(this.student);
  //     },
  //     error: (error) => {
  //       console.error('Error fetching student info:', error);
  //     },
  //   });
  // }

  // // loadTeachersByFaculty(facultyId: number): void {
  // //   this.teacherService.getTeachersByFaculty(facultyId)
  // //     .subscribe(
  // //       (data) => {
  // //         this.teachers = data;
  // //       },
  // //       (error) => {
  // //         console.error('Không thể lấy danh sách giảng viên:', error);
  // //       }
  // //     );
  // // }


  // loadTeachersByFaculty(facultyId: number): void {
  //   this.teacherService.getTeachersByFaculty(facultyId).subscribe({
  //     next: (response: Teacher[]) => {
  //       this.teacherTopic = response;

  //     },
  //     error: (error) => {
  //       console.error('Không thể lấy danh sách giảng viên:', error);
  //     }
  //   }
  //   )

  // };
}
