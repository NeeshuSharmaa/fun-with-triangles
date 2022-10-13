const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputE3 = document.querySelector("#output-box");


function calculateSumOfSquares(a,b) {
    const sumOfSquares = a*a +b*b;
    return sumOfSquares;
}
function calculateHypotenuse(){
    // if(sides !='') {
        const sumOfSquares =calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));
        const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
        outputE3.innerText ="The length of hypotenuse is " + lengthOfHypotenuse +"cm.";
    // }
    // else {
    //     outputE3.innerText ="Please, enter the valid numeric values!!"
    // }
    
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);
