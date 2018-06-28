// console.log('Hello World')
/*
function sayHello() {
    console.log('Hello World')
}

//First - class function
function logSaying(fn) {
    fn()
}
logSaying(sayHello)  

// Function Expression
var sayGoodbye = function() {
    console.log("GoodBye !!!")
}
sayGoodbye()

logSaying(function() {
    console.log("Hello NodeJS, This is expression !!!")
})
*/
//              Mark: - Using Require to call a module
/*
var sayHello = require("./hello")
sayHello()
var myVariable = "Hello World !!"
myVariable = "I don't know"
console.log(myVariable)

let myString = "my String"
myString = "VL"
console.log(myString)
const myNumber = 10
// myNumber = 20
console.log(myNumber)
*/
/*
var inforPerson = {
    firstName: "Luyen",
    lastName: "Hoang",
    age: 24,
    address: {
        city: "Ha noi",
        country: "Viet nam"
    },
    sayHello: function() {
        console.log("Hello World, i am " + this.firstName + " " + this.lastName + ", and from " + this.address.city + "," + this.address.country)
    }
}
inforPerson.sayHello()
console.log(inforPerson.age)
console.log(inforPerson["address"])
console.log(inforPerson["address"]["city"])
*/

//              Mark: -Hàm khởi tạo và sự kế thừa prototype
function Person(name, password) {
 this.name = name
 this.password = password   
}
// Tạo thêm các properties 
Person.prototype.getName = function () {
    return this.name
}
Person.prototype.getPassword = function() {
    return this.password
}
Person.prototype.getLevel = function() {
    return this.level
}
Person.prototype.level = "Admin"
var person = new Person("Luyen","123456")
console.log(person.getName())
console.log(person.getPassword())
console.log(person.getLevel())

function User(name) {
this.name = name
}
User.prototype = new Person()
var user = new User("Hoang","0987")
console.log(user.getName())
console.log(user.getPassword())
console.log(user.getLevel())