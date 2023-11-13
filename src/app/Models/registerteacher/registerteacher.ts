import { publishFacade } from "@angular/compiler";
import { Student } from "../student/student";
import { Teacher } from "../teacher/teacher";
import { Semester } from "../semester/semester";

export class RegisterTeacher {
    constructor(
        public id: number,

        public student: Student,

        public teacher: Teacher,

        public semester: Semester,

        public mark: number,

        public status: number,

        public note: string,
    ){}
}
