

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './student/home/home.component';
import { LoginThesistrackComponent } from './student/login-thesistrack/login-thesistrack.component';
// import { TopicComponent } from './student/topic/topic.component';
import { ModuleComponent } from './student/module/module.component';
// import { FacultyBoardComponent } from './student/faculty-board/faculty-board.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterTopicComponent } from './student/register-topic/register-topic.component';
import { ReportCalendarComponent } from './student/report-calendar/report-calendar.component';
import { RegisterTeacherComponent } from './student/register-teacher/register-teacher.component';
import { FeedbackComponent } from './student/feedback/feedback.component';
import { MarkstudentDialogComponent } from './student/markstudent-dialog/markstudent-dialog.component';
import { InfomarkDialogComponent } from './student/infomark-dialog/infomark-dialog.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginThesistrackComponent },
  // { path: 'topic', component: TopicComponent}, 
  { path: 'module', component: ModuleComponent },
  // { path: 'faculty-board', component: FacultyBoardComponent},
  { path: 'register_teacher', component: RegisterTeacherComponent },
  { path: 'report_calendar', component: ReportCalendarComponent },
  { path: 'register_topic', component: RegisterTopicComponent },
  { path: 'feedback', component: FeedbackComponent },

  // 2 dialog xem kết quả của sinh viên 
  { path: 'markstudent_dialog', component: MarkstudentDialogComponent },
  { path: 'infomark_dialog', component: InfomarkDialogComponent },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
