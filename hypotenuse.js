const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputE3 = document.querySelector("#output-box");


function calculateSumOfSquares(a,b) {
    const sumOfSquares = a*a +b*b;
    return sumOfSquares;
}
function calculateHypotenuse(){
      // if(!(!sides[0].value || !sides[1].value))     // if(!sides[0].value || !sides[1].value) 
    if(sides[0].value && sides[1].value) {
        if(Number(sides[0].value) > 0 && Number(sides[1].value> 0)){
            const sumOfSquares =calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));
            const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
            outputE3.innerText ="The length of hypotenuse is " + lengthOfHypotenuse +"cm.";
        }
        else{
            outputE3.innerText ="All input values should be non-negative (i.e. 0 and negative values should be excluded.)";
        } 
    } 
    else {
        outputE3.innerText ="Please, enter both the inputs!!"
    } 
}
    
    

hypotenuseBtn.addEventListener("click", calculateHypotenuse);
