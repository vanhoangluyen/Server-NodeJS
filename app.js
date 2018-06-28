// console.log('Hello World')
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
