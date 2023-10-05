import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AssessComponent } from "./assess/assess.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { RootComponent } from "./root.component";
import { FacultyBoardComponent } from "./student/faculty-board/faculty-board.component";
import { FooterComponent } from "./student/footer/footer.component";
import { HeaderComponent } from "./student/header/header.component";
import { HomeComponent } from "./student/home/home.component";
import { LoginThesistrackComponent } from "./student/login-thesistrack/login-thesistrack.component";
import { ModuleComponent } from "./student/module/module.component";
import { RegisterTopicComponent } from "./student/register-topic/register-topic.component";
import { ReportCalendarComponent } from "./student/report-calendar/report-calendar.component";
import { TopicComponent } from "./student/topic/topic.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { HomeTeacherComponent } from './teacher/home-teacher/home-teacher.component';
import { HeaderTeacherComponent } from './teacher/header-teacher/header-teacher.component';
import { FooterTeacherComponent } from './teacher/footer-teacher/footer-teacher.component';



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
    FacultyBoardComponent, 
    TopicComponent, 
    AssessComponent, 
    ReportCalendarComponent, 
    RegisterTopicComponent, HomeTeacherComponent, HeaderTeacherComponent, FooterTeacherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
