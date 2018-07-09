export default class Class {
  constructor(number) {
    this.number=number;
  }
  getDisplayName(){
    return `Class ${this.number}`;
  }
  equal(klass){
    return this.number===klass.number;
  }
  assignLeader(student){
    if(this.equal(student.klass)){
      this.leader=student;
    }else {
      console.log("It is not one of us.");
    }
  }
  appendMember(student){
    student.klass=this;
  }
  isIn(student){
    return this.equal(student.klass);
  }
}
