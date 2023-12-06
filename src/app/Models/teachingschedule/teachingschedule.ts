import { publishFacade } from "@angular/compiler";
import { Calender } from "../calender/calender";
import { Semester } from "../semester/semester";
import { Addgroupstudent } from "../addgroupstudent/addgroupstudent";
export class Teachingschedule {
    constructor(
        public id: number,

        public calender: Calender,

        public semester: Semester,

        public addGroupStudent: Addgroupstudent,

        public status: number,

    ){}
}
