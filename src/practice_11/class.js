export default class Class {
  constructor(number) {
    this.number=number;
  }
  callback(){};
  getDisplayName(){
    return `Class ${this.number}`;
  }
  equal(klass){
    return this.number===klass.number;
  }
  assignLeader(student){
    if(this.equal(student.klass)){
      this.leader=student;
      this.callback(student,this);
    }else {
      console.log("It is not one of us.");
    }
  }
  appendMember(student){
    if (!this.equal(student.klass)) {
      student.klass=this;
      this.callback(student,this);
    }
  }
  isIn(student){
    return this.equal(student.klass);
  }
  registerAssignLeaderListener(teacher){
    this.regitTeacher(teacher);
    function tellTeacher(leader,klass) {
      teacher.response(leader,klass);
    }
    this.callback= tellTeacher;
  }
  registerJoinListener(teacher){
    this.regitTeacher(teacher);
    function tellTeacher(student,klass) {
      teacher.response(student,klass);
    }
    this.callback= tellTeacher;
  }
  regitTeacher(teacher){
    if(!teacher.isMyClass(this)){
      teacher.klasses.push(this);
    };
  }
}
