

import Person from "./person.js";
export default class Student extends Person{
  constructor(name,age,klass){
    super(name,age);
    this.klass=klass;
  }
  introduce(){
    return `${super.basic_introduce()} I am a Student. I am at Class ${this.klass}.`;
  }
}
