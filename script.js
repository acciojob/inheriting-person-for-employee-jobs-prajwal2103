// complete this js code
class Person{
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	greet(){
		(`Hello, my name is ${this.name}, I am ${this.age} years old.`)
	}
}
class Employee extends Person {
	constructor(name,age,jobTitle){
		super(name,age);
		this.jobTitle=jobTitle;
	}
	jobGreet(){
		(`Hello, my name is ${this.name}, I am ${this.age} years old,and my job title is ${this.jobTitle}.`)
	}
}

function Person(name, age) {}

function Employee(name, age, jobTitle) {}
let person=new Employee("Alice",30,"Manager");
person.jobGreet();
// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
