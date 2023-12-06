import { Component } from '@angular/core';
import { Addgroupstudent } from 'src/app/Models/addgroupstudent/addgroupstudent';
import { Teachingschedule } from 'src/app/Models/teachingschedule/teachingschedule';
import { AddgroupstudentService } from 'src/app/Services/addgroupstudent/addgroupstudent.service';
import { GroupstudentService } from 'src/app/Services/groupstudent/groupstudent.service';
import { SemesterService } from 'src/app/Services/semester/semester.service';
import { TeacherService } from 'src/app/Services/teacher/teacher.service';
import { TeachingscheduleService } from 'src/app/Services/teachingschedule/teachingschedule.service';

@Component({
  selector: 'app-report-calendar',
  templateUrl: './report-calendar.component.html',
  styleUrls: ['./report-calendar.component.css']
})
export class ReportCalendarComponent {
  list: any[] = [];
  teachingSchedules: Teachingschedule[] = [];
  addGroupStudents: Addgroupstudent[] = [];
  semesters: Teachingschedule[] = [];

  constructor(private teachingScheduleService: TeachingscheduleService,
  private teacherService: TeacherService,
  private groupStudentService: GroupstudentService,
  private semesterService: SemesterService,
  private addGroupStudentService: AddgroupstudentService,
    // private detect: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadFeedbacks();
  }

  loadFeedbacks(): void {
    this.teachingScheduleService.getAllTeachingSchedule().subscribe(data => {
      this.teachingSchedules = data;
      console.log(this.teachingSchedules)
    });
  }

  loadSemester() : void {
    this.teachingScheduleService.getAllTeachingSchedule().subscribe(data => {
      this.semesters = data;
      console.log(this.semesters)
    });
  }

  getAllAddGroupStudent() : void {
    this.addGroupStudentService.getAllAddGroupStudent().subscribe(data => {
      this.addGroupStudents = data,
      console.log(this.addGroupStudents)
    });
  }

  

}
