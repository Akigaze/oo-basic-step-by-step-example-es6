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
    if(!teacher.isMyClass(this)){
      teacher.klasses.push(this);
    };
    function tellTeacher(leader,klass) {
      teacher.response(leader,klass);
    }
    this.callback= tellTeacher;
  }
  registerJoinListener(teacher){
    if(!teacher.isMyClass(this)){
      teacher.klasses.push(this);
    };
    function tellTeacher(student,klass) {
      teacher.response(student,klass);
    }
    this.callback= tellTeacher;
  }
}
