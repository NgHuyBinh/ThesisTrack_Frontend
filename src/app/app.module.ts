import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AssessComponent } from "./assess/assess.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { RootComponent } from "./root.component";
// import { FacultyBoardComponent } from "./student/faculty-board/faculty-board.component";
import { FooterComponent } from "./student/footer/footer.component";
import { HeaderComponent } from "./student/header/header.component";
import { HomeComponent } from "./student/home/home.component";
import { LoginThesistrackComponent } from "./student/login-thesistrack/login-thesistrack.component";
import { ModuleComponent } from "./student/module/module.component";
import { RegisterTopicComponent } from "./student/register-topic/register-topic.component";
import { ReportCalendarComponent } from "./student/report-calendar/report-calendar.component";
// import { TopicComponent } from "./student/topic/topic.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RegisterTeacherComponent } from './student/register-teacher/register-teacher.component';
import { FeedbackComponent } from './student/feedback/feedback.component';
import { MarkstudentDialogComponent } from "./student/markstudent-dialog/markstudent-dialog.component";

import { MatIconModule } from '@angular/material/icon';
import { InfomarkDialogComponent } from './student/infomark-dialog/infomark-dialog.component';
// import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoginThesistrackComponent,
    HeaderComponent ,
    RootComponent,
    HomeComponent,
    NotFoundComponent, 
    ModuleComponent, 
    // FacultyBoardComponent, 
    // TopicComponent, 
    AssessComponent, 
    ReportCalendarComponent, 
    RegisterTopicComponent, 
    RegisterTeacherComponent, FeedbackComponent, 
    MarkstudentDialogComponent, InfomarkDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    // NgxExtendedPdfViewerModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
