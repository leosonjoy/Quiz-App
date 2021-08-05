

const quizData = [
    {
        question: `RFL stands for`,
        a:`Rangpur Foundry Limited`,
        b:`Rajshahi Foundry Limited`,
        c:`Russia Foundry Limited`,
        d:`Rafik Foundry Limited`,
        correct:`a`
    }, {
        question: `Who is the Founder of Pran-RFL Group?`,
        a:`Ahsan Khan Chowdhury`,
        b:`A.B.M Kollol Islam`,
        c:`Mafidul Haque`,
        d:`Amjad Khan Chowdhury`,
        correct:`d`
    }, {
        question: `Who is the head of distribution of RFL Group?`,
        a:`Ahsan Khan Chowdhury`,
        b:`A.B.M Kollol Islam`,
        c:`Mafidul Haque`,
        d:`Amjad Khan Chowdhury`,
        correct:`c`
    }, {
        question: `Who is the CEO of RFL Group?`,
        a:`Ahsan Khan Chowdhury`,
        b:`A.B.M Kollol Islam`,
        c:`Mafidul Haque`,
        d:`Amjad Khan Chowdhury`,
        correct:`a`
    }
];


const answerEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question'); 
const a_text = document.getElementById('a_text');     
const b_text = document.getElementById('b_text'); 
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');



let currentQuiz = 0;
let score = 0;


loadQuiz();

function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML =currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
   
}

function getSelected(){
    
    let answer = undefined;
    
    answerEls.forEach((answerEl) => {

        if(answerEl.checked){
            answer = answerEl.id;
        }   
    });

    return answer;
}




function deselectAnswers(){
    answerEls.forEach((answerEl) => {

        answerEl.checked = false;
    });
}





submitBtn.addEventListener(`click`, () => {
    // Check to the answer
    const answer = getSelected();

    console.log(answer);
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            
            loadQuiz();
        }else{
            quiz.innerHTML = `<h2>You Answered Correctly ${score}/${quizData.length} questions.</h2> 
                            <button onclick='location.reload()'>Reload</button>`;
        }
    
    }       
  
})

