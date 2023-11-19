import { Faculty } from "../faculty/faculty";
import { Teacher } from "../teacher/teacher";

export class Student {
  
  constructor(
    public id: number,
    public numberStudent: string,
    public name: string,
    public address: string,
    public email: string,
    public phone: string,
    public major: string,
    public birthday: Date,
    public gender: number,
    public classroom: string,
    public schoolyear: string,
    public faculty: Faculty
  ) {}
}
