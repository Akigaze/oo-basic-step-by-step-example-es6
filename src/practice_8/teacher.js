
import Person from "./person.js";
export default class Teacher extends Person {
  constructor(id,name,age,klass) {
    super(id,name,age);
    this.klass=klass;
  }
  introduce(){
    let classString=(this.klass===undefined
      ?"No Class"
      :`${this.klass.getDisplayName()}`);
    return `${super.introduce()} I am a Teacher. I teach ${classString}.`;
  }
  introduceWith(student){
    let isTeach=(this.klass.equal(student.klass)
      ?"teach"
      :"don't teach");
    return `${super.introduce()} I am a Teacher. I ${isTeach} ${student.name}.`;
  }
}
