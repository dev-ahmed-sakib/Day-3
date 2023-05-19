"use strict";

// (---1---) Find GPA and Grade with respect to Marks in any subject //

/*

let mark = prompt("Enter a Value for watch your GPA!");

if(mark >= 80 && mark <= 100){
  document.write("You got (A+)");
}else if(mark >= 70 && mark <= 79){
  document.write("You got (A)");
}else if(mark >= 60 && mark <= 69){
  document.write("You got (A)");
}else if(mark >= 50 && mark <= 59){
  document.write("You got (B)");
}else if(mark >= 40 && mark <= 49){
  document.write("You got (C)");
}else if(mark >= 33 && mark <= 39){
 document.write("You got (D)");
}else if(mark >= 0 && mark <= 32){
  document.write("You got (F)");
}else{
  document.write(`Sorry, you have not entered any value between (0 to 100) number.  <br>

  If you want to get a correct result then you have to put any number between (0 to 100).`);
}
*/









// (---2---) Create a loop that will rotate from 1000 to 300  //

/*
for (let i = 1000; i >= 300; i--) {
  console.log(i);
}
*/




//  (---3---)  Find the even and odd numbers from 1 and 1000 through for loop   //

/*

for (let i = 1; i <= 1000; i++) {
  if (i % 2 === 0) {
	console.log(`here EVEN Numbers : ${i}`);
  }
}


for(let i = 1; i <= 1000; i++){
  if(i % 2 !== 0){
	console.log(`here ODD Numbers : ${i}`);
  }
}
*/



//  (---4---)  Find the number divisible by 7 between 1 and 1000   //

/*
for (let i = 1; i <= 1000; i++) {
  if (i % 7 === 0) {
	console.log(i);
  }
}
*/









//  (---5---)  Create a loop using “for” that will increment by 3 per step and break the loop when it finds a number divisible by 11	//

/*
for (let i = 1; i <= 1000; i = i + 3){
	if(i % 11 === 0){
  	console.log(i);
	}
}
*/






//  (---6---)  Create a loop that rotates 500 times using the for loop where you just pull out the numbers divisible by 3 and 4  //


/*
for (let i = 1; i <= 500; i++){
	if(i % 3 === 0 || i % 4 === 0){
    	console.log(i);
	}
}
*/












//  (---7---)  Create a loop where the initial value is 10,000. You need to rotate the loop 50 times by using the increment and decrement operators twice.   //


/*

let countSerial = 0;

for (let i = 0; i <= 10000; i = i + 200) {
    
  console.log(i + " = Serial > " + countSerial++);
 
  if(i == 10000){
  	for(let x = 10000; x > 0; x = x - 200){
    	console.log(x + " = Serial > " + countSerial--);
  	}
  }
}
*/



