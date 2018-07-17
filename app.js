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
 */

/*

logSaying(function() {
    console.log("Hello NodeJS, This is expression !!!")
})
*/

/*
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
/*
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

// them mot tinh chat trong thuoc tinh san co
Date.prototype.vnFormat = function() {
    var yyyy = this.getFullYear()
    var mm = this.getMonth() + 1
    var dd = this.getDate()
    var hh = this.getHours()
    var minute = this.getMinutes()
    var ss = this.getSeconds()
    return dd + "/" + mm + "/" + yyyy + " - " + hh + ":" + minute + ":" + ss
}
var now = new Date()
console.log(now.vnFormat())
// custum thuoc tinh san co
var xms = new Date(2016,11,25,10,10,10)
console.log(xms.vnFormat())
*/
//                  Mark: - Bien tham tri va bien tham chieu
// Bien tham tri
/*
function changeByValue(b) {
    b = 2
}
var a = 1
changeByValue(a)
console.log(a)

function changeByReferent(obj) {
    obj.property1 = function() {
        console.log("Property1")
    }
    obj.property2 = {}
    obj.nuber = 100
}
var c = {}
changeByReferent(c)
console.log(c)

var changeValue = 10

var ex = changeValue
ex = 30
console.log(ex)
console.log(changeValue)

var arr = []
arr.push(1)
var refArr = arr
refArr.push(2)
console.log(arr, refArr)
*/
/*
(function(middleName) {
    var firstName = "Hoang"
    console.log(firstName)
    console.log(middleName)
}("Van"))
var firstName = "Luyen"
console.log(firstName)
*/
// Các module trong NodeJS
//              Mark: - Using Require to call a module
/*
var sayHello = require("./hello")
sayHello()
*/
// Mark: - tạo module dùng trong đa ngôn ngữ.
/*
var greet = require("./greet")
greet.english()
greet.vietnamese()
*/
// var hello = require("./hello1")
// hello()
// var hello2 = require("./hello2").sayHello
// hello2()

// var hello3 = require("./hello3")
// hello3.sayHello()
// hello3.message = "Change hello NodeJS"
// var hello32 = require("./hello3")
// hello32.sayHello()
// var Hello4 = require("./hello4")
// var hello4 = new Hello4()
// hello4.sayHello()

// var hello5 = require("./hello5").sayHello
// hello5()

// var util = require("util")
// var name = "Hoa"
// var message = util.format("Hello, %s", name)
// console.log(message)
// util.log(message)

//var url = require("url")
//https://nodejs.org/dist/latest-v8.x/docs/api/util.html#util_util_format_format_args
//var urlInfor = url.parse("https://nodejs.org/dist/latest-v8.x/docs/api/util.html#util_util_format_format_args")
//console.log(urlInfor)
//                                                                  Mark: - Using Loop
/*
var arr = [4,5,6]
for (var item of arr) {
    console.log(item, item == 5)
}
*/
/*
var aArray = []
aArray.push(1)
aArray.push(2)
aArray.push(3)

aArray.forEach(function(item) {

    console.log(item)
})
*/
