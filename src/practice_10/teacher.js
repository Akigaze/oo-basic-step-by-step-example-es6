
import Person from "./person.js";
export default class Teacher extends Person {
  constructor(id,name,age,klasses=[]) {
    super(id,name,age);
    this.klasses=klasses;
  }
  introduce(){
    return `${super.introduce()} I am a Teacher. ${this.class_introduce()}`;
  }
  class_introduce(){
    return (this.klasses.length===0)
      ?"I teach No Class."
      :`I teach Class ${this.klasses.map( klass =>klass.number).join(', ')}.`;
  }
  introduceWith(student){
    let isTeach=this.isTeaching(student)
      ?"teach"
      :"don't teach";
    return `${super.introduce()} I am a Teacher. I ${isTeach} ${student.name}.`;
  }
  isTeaching(student){
    return this.klasses.some((klass)=>{
        return klass.isIn(student);
      });
    // return true;
  }
}
