

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

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginThesistrackComponent },
  // { path: 'topic', component: TopicComponent}, 
  { path: 'module', component: ModuleComponent},
  // { path: 'faculty-board', component: FacultyBoardComponent},
  { path: 'report_calendar', component: ReportCalendarComponent},
  { path: 'register_topic', component: RegisterTopicComponent
},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
