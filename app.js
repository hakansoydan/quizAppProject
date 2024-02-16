const questions = [
  {
    question: "Hangi gezegen Güneş Sistemi'nde üçüncü sıradadır?",
    answers: [
      { text: "Mars", corret: false },
      { text: "Venüs", corret: false },
      { text: "Dünya", corret: true },
      { text: "Jüpiter", corret: false },
    ],
  },
  {
    question: "Hangi elementin sembolü 'O' harfidir",
    answers: [
      { text: "Oksijen", corret: true },
      { text: "Altın", corret: false },
      { text: "Gümüş", corret: false },
      { text: "Hidrojen", corret: false },
    ],
  },
  {
    question: "5 x 8 işlemi sonucu kaçtır",
    answers: [
      { text: 35, corret: false },
      { text: 40, corret: true },
      { text: 50, corret: false },
      { text: 70, corret: false },
    ],
  },
  {
    question: "Hangi gezegen, üzerinde halka sistemine sahiptir?",
    answers: [
      { text: "Mars", corret: false },
      { text: "Satürn", corret: true },
      { text: "Uranüs", corret: false },
      { text: "Neptün", corret: false },
    ],
  },
  {
    question: " Hangi yıl Leonardo da Vinci doğmuştur?",
    answers: [
      { text: 1600, corret: false },
      { text: 1452, corret: true },
      { text: 1456, corret: false },
      { text: 1980, corret: false },
    ],
  },
  {
    question: "İnsan vücudundaki en büyük organ hangisidir?",
    answers: [
      { text: "Beyin", corret: false },
      { text: "Cilt", corret: true },
      { text: "Göz", corret: false },
      { text: "Akciğer", corret: false },
    ],
  },
  {
    question: "Hangi ülke, Güney Amerika kıtasında yer almaz?",
    answers: [
      { text: "Brezilya", corret: false },
      { text: " Meksika", corret: true },
      { text: "Arjantin", corret: false },
      { text: "Kolombiya", corret: false },
    ],
  },
];
const questionElement = document.querySelector("#question");
const answerButtons = document.querySelector("#answer-buttons");
const nextButton = document.querySelector("#next-btn");

let currentQuestionIndex = 0;
let scroe = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  scroe = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}
function showQuestion(){
   resetState();
   let currentQusetion = questions[currentQuestionIndex];
   let questionNo = currentQuestionIndex + 1;
   questionElement.innerHTML =questionNo +". " + currentQusetion.question;

   currentQusetion.answers.forEach(answer =>{
      const button = document.createElement('button');
      button.innerHTML = answer.text;
      button.classList.add('btn');
      answerButtons.appendChild(button);
      if(answer.corret){
         button.dataset.corret = answer.corret;
      }
      button.addEventListener('click', selectAnswer);
   });
}

function resetState(){
   nextButton.style.display= 'none';
   while(answerButtons.firstChild){
      answerButtons.removeChild(answerButtons.firstChild);
   }
}

function selectAnswer(e){
   const selectedBtn = e.target;
   const isCorrect =selectedBtn.dataset.corret === 'true';
   if(isCorrect){
      selectedBtn.classList.add('correct');
      scroe++;
   }else{
      selectedBtn.classList.add('incorrect');
   }
   Array.from(answerButtons.children).forEach(button =>{
      if(button.dataset.corret ==='true'){
         button.classList.add('correct');
      }
      button.disabled = true;
   });
   nextButton.style.display = 'block';
}

function showScore(){
   resetState();
   questionElement.innerHTML = ` Toplam puanın: ${scroe} out of  ${questions.length}`;
   nextButton.innerHTML= 'Play Again';
   nextButton.style.display = 'block';
}


function handleNextButton(){
   currentQuestionIndex++;
   if(currentQuestionIndex < questions.length){
      showQuestion();
   }else{
      showScore();
   }
}

nextButton.addEventListener('click',()=>{
   if(currentQuestionIndex < questions.length){
      handleNextButton();
   }else{
      startQuiz();
   }
})

startQuiz();