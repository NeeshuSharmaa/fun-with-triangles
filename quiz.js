const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#submit-answer-btn");
const outputE2 =document.querySelector("#output");
const correctAnswers = ["90°", "right-angled", "50°, 50°"];

function calculateScore() {
    let score =0;
    let index=0;
    const formResults =new FormData(quizForm);
    // console.log(formResults);
    // for (let entry of formResults.entries()){
    //     console.log(entry)
    // }
    for (let value of formResults.values()){
        if(value===correctAnswers[index]){
            score = score +1;
        }
        index = index+1;
    }
    
        // console.log(score); 
    outputE2.innerText="Your score is " +score +" 💁🏻‍♀️";
}

submitAnswerBtn.addEventListener("click", calculateScore);

