var containerEle = document.body.querySelector(".container");


num1 = prompt("Please enter a number");
num1 = parseInt(num1);
if(Number.isInteger(num1)){
 num2 = prompt("Please enter another number");
  num2 = parseInt(num2);
  if(Number.isInteger(num2)){
    op = prompt("Please enter an operator +,-,*,/");
      if(op == "+"){
        containerEle.innerHTML = "The answer is " + (num1 + num2);
      }else if(op == "-"){
        containerEle.innerHTML = "The answer is " + (num1 - num2);
      }else if(op == "*"){
        containerEle.innerHTML = "The answer is " + (num1 * num2);
      }else if(op =="/"){
        containerEle.innerHTML = "The answer is " + (num1 / num2);
      }else{containerEle.innerHTML = "There was an error";}
    
    }else{
    containerEle.innerHTML = "There was an error";
  }
}else{
  containerEle.innerHTML = "There was an error";
}