// complete this js code
// class Person{
// 	constructor(name,age){
// 		this.name=name;
// 		this.age=age;
// 	}
// 	greet(){
// 		(`Hello, my name is ${this.name}, I am ${this.age} years old.`)
// 	}
// }
// class Employee extends Person {
// 	constructor(name,age,jobTitle){
// 		super(name,age);
// 		this.jobTitle=jobTitle;
// 	}
// 	jobGreet(){
// 		(`Hello, my name is ${this.name}, I am ${this.age} years old,and my job title is ${this.jobTitle}.`)
// 	}
// }


function Person(name, age) {
	this.name=name;
    this.age=age;

	
}
Person.prototype.greet=function(){
	console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`)
}

function Employee(name, age, jobTitle) {
	Person.call(this,name,age);
	this.jobTitle=jobTitle;
}
Employee.prototype.__proto__=Person.prototype;
Employee.prototype.jobGreet=function(){
	console.log(`Hello, my name is ${this.name}, I am ${this.age} years old,and job title is ${this.jobTitle}.`)
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
let person=new Person("Alice",25);
person.greet();
let employee=new Employee("Bob",30,"Manager");
employee.jobGreet();


