

import Person from "./person.js";
export default class Student extends Person{
  constructor(id,name,age,klass){
    super(id,name,age);
    this.klass=klass;
  }
  isMe(student){
    return student!==undefined&&this.id===student.id;
  }
  introduce(){
    return `${super.introduce()} I am a Student. ${this.class_introduce()}`;
  }
  class_introduce(){
    return this.isMe(this.klass.leader)
      ?`I am Leader of ${this.klass.getDisplayName()}.`
      :`I am at ${this.klass.getDisplayName()}.`;
  }
}
