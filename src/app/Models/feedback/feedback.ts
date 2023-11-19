import { publishFacade } from "@angular/compiler";
import { Student } from "../student/student";

export class Feedback {
    constructor(
        public id: number,

        public student: Student,

        public sendDate: Date,

        public ststus: number,

        public note: string,

        public reply: string,
    ){}
}
