import { publishFacade } from "@angular/compiler";
import { Calender } from "../calender/calender";
import { Semester } from "../semester/semester";
import { Groupstudent } from "../groupstudent/groupstudent";
export class Teachingschedule {
    constructor(
        public id: number,

        public calender: Calender,

        public semester: Semester,

        public groupStudent: Groupstudent,

        public status: number,

    ){}
}
