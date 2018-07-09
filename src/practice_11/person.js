
export default class Person {
  constructor(id,name,age) {
    this.id=id;
    this.name=name;
    this.age=age;
  }
  basic_introduce(){
    return `My name is ${this.name}. I am ${this.age} years old.`;
  }
  introduce(){
    return this.basic_introduce();
  }
}
