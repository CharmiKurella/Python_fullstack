console.log("Hello world")
let student_name="Muskan"
console.log("student_name is: "+ student_name)
let student_age=20
let course_name="python full stack"
console.log("student age is: " + student_age, "course name is: " + course_name)
let fee = 10000
let discount = 10
let discounted_fee = fee - (fee*discount/100)
console.log("discounted fee is: " + discounted_fee)
let age=18
if(age>=18){
    console.log("eligible for admission")
}
else{
    console.log("not eligible for admission")
}
for(let i=1; i<=5; i++){
    console.log("iteration number: "+i)
}
const pi = 3.14
console.log("value of pi is: "+ pi)
let student = {
    name: "sriram",
    age: 20,
    course: "python full stack",
    fee: 10000
}
console.log("student details: ", student)

function greetStudent(name){
    console.log("hello "+ name +", welcome to NRIIT learning management system")
}
greetStudent(student_name)