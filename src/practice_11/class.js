export default class Class {
  constructor(number) {
    this.number=number;
    this.classEvent={
      assignLeader:()=>{},
      appendMember:()=>{}
    };
  }
  callback(){};
  getDisplayName(){
    return `Class ${this.number}`;
  }
  equal(klass){
    return this.number===klass.number;
  }
  // callBack(student,klass){
  //   let call=this.classEvent.assignLeader;
  //   if (call!==undefined) {
  //     call(student,klass);
  //   }
  // }
  assignLeader(student){
    if(this.equal(student.klass)){
      this.leader=student;
      //this.callBack(student,this);
      let call=this.classEvent.assignLeader;
      //if (call!==undefined) {
      call(student,this);
      //}
    }else {
      console.log("It is not one of us.");
    }
  }

  appendMember(student){
    //if (!this.equal(student.klass)) {
      student.updateClass(this);
      //this.callBack(student,this);
      let call=this.classEvent.appendMember;
      //if (call!==undefined) {
      call(student,this);
      //}
    //}
  }
  isIn(student){
    return this.equal(student.klass);
  }
  registerAssignLeaderListener(teacher){
    this.regitTeacher(teacher);
    function tellTeacher(leader,klass) {
      teacher.responseNewLeader(leader,klass);
    }
    this.classEvent.assignLeader=tellTeacher;
    //this.callback= tellTeacher;
  }
  registerJoinListener(teacher){
    this.regitTeacher(teacher);
    function tellTeacher(student,klass) {
      teacher.responseNewMember(student,klass);
    }
    this.classEvent.appendMember=tellTeacher;
  }
  regitTeacher(teacher){
    if(!teacher.isMyClass(this)){
      teacher.addClass(this);
    };
  }
}
