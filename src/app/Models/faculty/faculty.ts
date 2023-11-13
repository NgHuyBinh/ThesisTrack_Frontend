export class Faculty {
    facultyId(facultyId: any) {
      throw new Error('Method not implemented.');
    }
    constructor(
        public id: number,
        public code: string,
        public name: string,
    ){}
}
