/* Find GPA and Grade with respect to Marks in any subject //

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




