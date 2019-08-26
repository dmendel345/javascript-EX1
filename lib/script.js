// script 

document.write("EX1 Java Script" + "<br/>");

// EX1 var !
var x = "3";
console.log(x);
document.write(x +"<br/>");

//change x value

x = "David";
console.log(x);
document.write("x חדש = "+ x +"<br/>");


// EX2 objects !
document.write("EX2 Java Script" + "<br/>");
var student = {name: "David", age: 30, height: 185, eye: "green"};
console.log(student);
document.write("רשימת סטודנטים =  " + student.name +" " + student.age + " " + student.height + " " + student.eye + "<br/>");


//change eye color
student.eye = "red";
console.log(student);
console.log(student.eye);
document.write("רשימת סטודנטים =  " + student.name +" " + student.age + " " + student.height + " " + student.eye + "<br/>");

// Add location
student.location = "ישראל ?";
student.city = "";
console.log(student);
document.write("רשימת סטודנטים =  " + student.name + " " + student.age + " " + student.height + " " + student.eye + " " + student.location + " "  + student.city + "<br/>");


//Add languages
student.language = {lang1: "אנגלית ?", lang2: "עברית ?",lang3: "רוסית ?"};
console.log(student);
document.write("רשימת סטודנטים =  " + student.name + " " + student.age + " " + student.height + " " + student.eye + " " + student.location + " "  + student.city + "<br/>");document.write("רשימת סטודנטים =  " + student.name + " " + student.age + " " + student.height + " " + student.eye + " " + student.location + " "  + student.city + " "  + student.language.lang2 + "<br/>");

console.log(student.language.lang2);
document.write(" מה השפה שלך " + student.language.lang2 + "<br/>");


// EX3 arrey !
// Even numbers
listOfNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];



  console.log(listOfNumbers);
