/*Create a calculator.
When clicking on the keys with numbers - the set of entered numbers should be shown on the calculator display.<br>
* When clicking on operator signs (`*`, `/`, `+`, `-`), nothing happens on the screen - 
the program waits for the second number to be entered to perform the operation.<br>
* If the user has entered one number, selected an operator, and entered a second number,
 then when you press both the `=` button and any of the operators, the result of 
 the previous expression should appear in the scoreboard.<br>
* When you press the `M+` or `M-` keys on the left side of the display, you must show a small letter 
`m` - this means that a number is stored in memory. 
Clicking on `MRC` will show the number from memory on the screen. Pressing `MRC` again should clear the memory.*/

window.addEventListener("DOMContentLoaded",()=>{
    const btn = document.querySelector(".keys"),
    display = document.querySelector(".display > input"),
    display1 = document.getElementsByTagName("input")[0],
    oper = ["-","+","*","/"];
   
    
    const calc = {
      value1:"",
      value2:"",
      operator: "",
      result:""
  }

  function add (a, b) {
    return a+b ;
  }
  function mul (a, b) {
    return a*b;
  }
  function sub (a, b) {
    return a-b ;
  }
  function div (a, b) {
    if (b===0) {
      alert("It is not possible to divide by zero");
      return;
    }
    return a/b;
  
  }

function compute (a1, a2, sign){

  switch (sign) {
    case "+": return add (a1, a2);
    case "*": return mul (a1, a2);
    case "/": return div (a1, a2);
    case "-": return sub (a1, a2);
 }
}

//зовнішні змінні, зберігать інформацію між кліками
let isOperation = false;
let memoryValue = 0;
let currentValue = "";
console.log(memoryValue)


    btn.addEventListener("click", function (e) {

      const clickedButtonValue = e.target.value;
    
      const c = "m";
      

      if (clickedButtonValue === "C") {
        display.value  = "";
        calc.value1 = "";
        calc.value2 = "";
        calc.operator = "";
        calc.result = "";
        isOperation = false;
       }
      else if (clickedButtonValue === "=")
      {
       calc.result = compute(parseFloat(calc.value1), parseFloat(calc.value2), calc.operator);
        display.value = calc.result;
        isOperation == false;
        calc.operator="";
        console.log("eqauls");
        console.log(calc);
      }  
      else if (oper.includes(clickedButtonValue)&&calc.result=="") {
        calc.operator = clickedButtonValue;
        isOperation = true;
        display.value = calc.value1;
        console.log("operator");
          console.log(calc);
      } 
      else if (oper.includes(clickedButtonValue))
      { 
          calc.operator = clickedButtonValue;
          calc.value2 = "";
          calc.value1 =calc.result;
          display.value = calc.value1;
          calc.result = "";
          isOperation = true;
          console.log("here");
          console.log(calc);
      } 
      else if (/\d/.test(clickedButtonValue)){

        if(isOperation == false)
        {
          calc.value1 += parseFloat(clickedButtonValue);
          display.value = calc.value1;
          console.log("value1");
          console.log(calc);
        }
        else
        {
          calc.value2 += parseFloat(clickedButtonValue);
          display.value = calc.value2;
          console.log("value2");
          console.log(calc);
        } 
      }
      else if (clickedButtonValue == ".") {
        if(isOperation == false)
        {
          calc.value1 += ".";
          display.value =  calc.value1;
        }
        else
        {
          calc.value2 += ".";
          display.value ==  calc.value2;
        }     
    }
      
    else if (clickedButtonValue === "m+"|| clickedButtonValue === "m-") {
        
        memoryValue = parseFloat(display.value);
        display.value = c;
        currentValue = display.value;
        display1.style.textAlign = "left";

      }
       

       if (clickedButtonValue === "mrc") {

        if (display.value == currentValue) {
        let temp =  parseFloat(memoryValue);
        display.value = temp;
        display1.style.textAlign = "right";
        
      }
        
        else if (display.value !== currentValue) {
        display.value  = "";
        calc.value1 = "";
        calc.value2 = "";
        calc.operator = "";
        calc.result = "";
        isOperation = false;
       }

      }
      
    })
  })




      
      
      

