const triangleSides = document.querySelectorAll(".triangle-sides-input");
const output = document.querySelector("#output-box");
const areaBtn = document.querySelector("#area-btn")


function areaOfTriangle() {
    var area=1/2*(Number(triangleSides[0].value)*(Number(triangleSides[1].value)));
    
    // output.innerHTML = `The area is <div class="area-style">` + area + "</div>";
    output.innerText="The Area of triangle is " + area +" cm²."
}



areaBtn.addEventListener("click", areaOfTriangle);