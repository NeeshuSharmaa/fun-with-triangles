const triangleSides = document.querySelectorAll(".triangle-sides-input");
const output = document.querySelector("#output-box");
const areaBtn = document.querySelector("#area-btn")


function areaOfTriangle() {
    if(triangleSides[0].value&& triangleSides[1].value){
        if(triangleSides[0].value >0 && triangleSides[1].value >0 ){
            var area=1/2*(Number(triangleSides[0].value)*(Number(triangleSides[1].value)));
    
        // output.innerHTML = `The area is <div class="area-style">` + area + "</div>";
            output.innerText="The Area of triangle is " + area +" cm²."

        }
        else{
            output.innerText ="Sides should be non-negative only!!"
        }
        
    }
    else {
        output.innerText ="Please, enter both the inputs!!"
    }
}
   



areaBtn.addEventListener("click", areaOfTriangle);