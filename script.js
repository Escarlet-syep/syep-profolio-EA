// console.log ("Hello, World!");

// let Pink = (123);
// consol.log(Pink);
// console.log(typeof Pink);

// consol.log(10 + " eggs");
// console.log(10 + 8 + " eggs");
// console.log("eggs " 10 + 8);

// console.log(8!= 2);

// //Both Conditions need to be true
// console.log(7>3)&&(10<8);

// //only one condition needs to be true
// console.log(10>3)||(5>10);

// //If the statement is logical or not
// console.log(!5>3);

const hour = new Date().getHours();
let greeting = "";

if (hour < 12){
    greeting = "Good Morming ☀️";
}else if (hour<18){
    greeting = "Good Afternoon 🌥";
}else{
    greeting = "Good Evening 🌙";
}

document.getElementById("greeting").innerText = greeting;