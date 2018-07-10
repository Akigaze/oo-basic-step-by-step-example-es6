
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
  }
  isMyClass(klass){
    return this.klasses.some((klz)=> {
      return klz.equal(klass);
    });
  }
  responseNewLeader(leader,klass){
      console.log(`I am ${this.name}. I know ${leader.name} become Leader of ${klass.getDisplayName()}.`);
  }
  responseNewMember(student,klass){
    console.log(`I am ${this.name}. I know ${student.name} has joined ${klass.getDisplayName()}.`);
    //return `I am ${this.name}. I know ${student.name} has joined ${klass.getDisplayName()}.`;
  }
  addClass(klass){
    this.klasses.push(klass);
  }
}
