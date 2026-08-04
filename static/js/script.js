alert("welcome to NRIIT Learning Management System")
let heading = document.getElementById("welcome")
heading.innerHTML="welcome future software engineers"
console.log("heading element:", heading)
let msg = document.getElementById("message")
msg.innerHTML = "javascript is fun"
console.log("message element:",msg)
function showmessage(){
    alert("welcome to NRIIT Learning Management Function")
}
function changeHeading(){
    document.getElementById("welcome").innerHTML = "Welcome Python Fullstack Developers"
}
let heading1=document.querySelector("#welcome");
console.log("Heading element: ",heading1)
let button = document.getElementById("btnGreeting");
button.addEventListener("Click", function(){
    alert("Welcome to javascript Event Handling");
});
let registerForm = document.getElementById("registerForm");
registerForm.addEventListener("submit",function(event){
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    if(!name || !email || !password){
        alert("please fill in all fields.");
        return;
    }
    alert("registration successful!");
    console.log("Name:",name);
    console.log("Email:",email);
    console.log("Password:",password);
})





//write a function to square a number


function squareNumber(num){
    return num * num;
}
x=squareNumber(5);
console.log("square of 5 is:",x)


//write a function to odd or even number
function checkOddEven(num){
    if (num % 2 == 0){
        return "Even"
    } else {
        return "Odd"
    }
}
console.log("check if 7 is odd or even:",checkOddEven(7));