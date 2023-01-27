// Declare variable

const runFunction =  () =>{
const numOne =  prompt("Please enter first number",2 );
const numTwo = prompt("Please enter second number",20 );


// function for multiplications 
const multiplication = (firstNum,secondNum) => {
    return firstNum * secondNum;
}

//  Output result on Console use node index.js
console.log(multiplication(numOne , numTwo));

document.getElementById("ansModule").innerHTML = multiplication(numOne , numTwo);
}
