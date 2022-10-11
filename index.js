const inputs=document.querySelectorAll(".angle-input");
const isTriangleBtn=document.querySelector("#is-triangle-btn");
const outputE1=document.querySelector("#output");


function calculateSumOfAngles(angle1,angle2,angle3) {
    const sum = angle1+angle2+angle3;
    return sum;
}

function isTriangle() {
    angle1=inputs[0].value
    angle2=inputs[1].value
    angle3=inputs[2].value
    if (inputs[0].value && inputs[1].value && inputs[2].value) {
        if (String(Number(angle1)) != "NaN" && String(Number(angle2)) != "NaN" && String(Number(angle3)) != "NaN") {
            console.log(Number(angle1));
            const sumOfAngles = calculateSumOfAngles(Number(angle1), Number(angle2),Number (angle3));
            if(sumOfAngles===180) {
                outputE1.innerText="Yay, The angles form a triangle";
                // console.log("Yay, The angles form a triangle")
            }
            else {
                outputE1.innerText="Oh oh! The angles don't form a triangle";
                // console.log("Oh oh! The angles don't form a triangle");
            }
        }
        else {
            outputE1.innerText="Type the numbers!!"
        }
        
    }
    else {
        outputE1.innerText="Enter all the values"
    }
}

isTriangleBtn.addEventListener("click", isTriangle);
// isTriangleBtn.innerText=2;
// document.body.innerText=2;