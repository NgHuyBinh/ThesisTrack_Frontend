import { publishFacade } from "@angular/compiler";

export class Calender {
    constructor(
        public id: number,

        public room: string,

        public week: number,

        public thu: string,

        public day: Date,

        public period: string,

        public note: string,
    ){}
}
