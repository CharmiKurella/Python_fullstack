console.log("Hello world")
let student_name = "Charmi"
console.log("student_name is: " + student_name)
let student_age = 21
let corurse_name = "Pthon Full Stack"
console.log("Student age is: " + student_age, "Course name is: " + corurse_name)
let fee = 10000
let discount = 10
let discounted_fee = fee - (fee * discount / 100)
console.log("Discounted fee i: " + discounted_fee)
let age = 18
if(age>=18){
    console.log("Eiligible for admision")
}
else{
    console.log("Not eligible for admission")
}
for(let i=1; i<=5; i++){
    console.log("Itertion number: " + i)
}
const pi = 3.14
console.log("Value of pi is: " + pi)
let student = {
    name: "Charmi"
    age: 21,
    course: "Python Full Stack",
    fee: 10000
}   
console.log("Student details: ", student)

function greetStudent(name){
    console.log("Hello" + name + ", welcome to NRIIT Learning Management system")
}
greetStudent(student_name)