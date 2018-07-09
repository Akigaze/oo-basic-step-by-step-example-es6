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
    }
  }
}
