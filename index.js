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
            if(Number(angle1)>=0 && Number(angle2)>=0 && Number(angle3)>=0){
                const sumOfAngles = calculateSumOfAngles(Number(angle1), Number(angle2),Number (angle3));
                if(sumOfAngles===180) {
                    outputE1.innerText="Yayee!! The angles form a triangle.";
                    // console.log("Yay, The angles form a triangle")
                }
                else {
                    outputE1.innerText="Oh oh! The angles don't form a triangle.";
                    // console.log("Oh oh! The angles don't form a triangle");
                }
            }
            else {
                outputE1.innerText="None of the input should be a negative angle!!"

            }

        }
            
        else {
            outputE1.innerText="All inputs should be numerics!! -_-"
        }
        
    }
    else {
        outputE1.innerText="Enter all the values, please!! -_- "
    }
}

isTriangleBtn.addEventListener("click", isTriangle);
// isTriangleBtn.innerText=2;
// document.body.innerText=2;