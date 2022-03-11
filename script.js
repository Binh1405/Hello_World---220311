const myName = document.getElementsByClassName("section1")[0];
console.log("myName", myName);
const age = document.createElement("p");
console.log("name", age);
age.innerHTML = "my name is Binh and I am 27 years old";
myName.appendChild(age);
