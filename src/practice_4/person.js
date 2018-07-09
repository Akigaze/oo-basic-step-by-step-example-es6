// 写一个Person类，要有name，age属性，要有一个introduce方法，
// introduce方法返回一个字符串形如：
//
// >My name is Tom. I am 21 years old.
//
// 再写一个Student类继承Person类，除了name，age属性，还有要有class属性。也有一个introduce方法，
// introduce方法返回一个字符串形如：
//
// >My name is Tom. I am 21 years old. I am a Student. I am at Class 2.
//
//
// 再写一个Worker类继承Person类，只有name，age属性。也有一个introduce方法，
// introduce方法返回一个字符串形如：
//
// >My name is Tom. I am 21 years old. I am a Worker. I have a job.
//
//
// 所有这三个类的这段文字：
//
// >My name is Tom. I am 21 years old.
//
// 应该调用Person的一个方法basic_introduce来返回。
//

export default class Person {
  constructor(name,age) {
    this.name=name;
    this.age=age;
  }
  introduce(){
    return "My name is "+this.name+". I am "+this.age+" years old.";
  }
}
