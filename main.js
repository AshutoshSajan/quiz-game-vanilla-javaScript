var quizList = document.querySelector(".quiz-list")
var sun = document.querySelector(".sun");
sun.innerText = `${String.fromCharCode(9967)}`;

var index = 0;
var quiz;
var score = 0;

const quizArray = [
 	{
	 	title: "What is the capital of india ?",
	 	option: ["Delhi", "Kolkata", "Punjab", "Maharastra"],
	 	answer: 0
 	},
  
  {
  	title:"Hardest element on the earth ?",
  	option: ["Titanium", "Iorn", "Steel", "Diamond"],
  	answer: 3
  }, 

  {
  	title: "which color has the highest wavelength ?",
  	option: ["Green", "Blue", "Red", "Purple"],
  	answer: 2
  },

  { 
  	title: "Father of computer ?", 
  	option: ["charles", "Charles Babbage", "both"],
  	answer: 1
  },
  	
  {
  	title: "Highest mountain in earth ?",
    option: ["Mount Everest", "K2", "Dhauladhar", "none of these"],
    answer: 0
  }
];

// const questions = quizArray.map((question, index) => question);
class Quiz {
	constructor(quizList, title, option, answer){
		this.quizTitle = title;
		this.quizOption = option;
		this.answer = answer;
		this.currentIndex = 0;
		this.element = quizList;
	}

	createList(){
		var html = "";
			const div = document.createElement("div");
			html += `<h1 class="current-question">${this.quizTitle}</h1>`;
			this.quizOption.forEach((option, index) => { 
				html += 
				`<div class="option-container">
					<p class="all-option" data-id="${index}">${option}</p>
					<button class="submit-btn" data-id="${index}">${String.fromCharCode(10003)}</button>
				</div>`;
			})
		this.element.innerHTML = html;
	}
}


function gameOver(e){
	if(e.target.className === "restart"){
		index = 0;
		score = 0;
		inst();
	} else if (e.target.className === "end"){
		quiz.element.innerHTML = `<p class="greet">Thank you for playing the game ${String.fromCharCode(9786)}</p>`;
	}
}

function inst(){
	if(quizArray.length == index){
		quiz.element.innerHTML = 
		`<div class="result-box">
			<p class="score-board">Your Score is <sapan class="score">${score}  out of ${quizArray.length} </span></p>
			<p class="confirmation">Do you want to play again</p>
			<button class="restart">Yes</button>
			<button class="end">No</button>
		</div>`;
		quiz.element.addEventListener("click", gameOver);
		return;
	}	

	quiz = new Quiz(quizList, quizArray[index].title, quizArray[index].option, quizArray[index].answer);
	index++;
	quiz.createList();
}

function handleSubmit(e){
	let id = e.target.dataset.id;
	if (e.target.className === "submit-btn"){
		if(id == quiz.answer) {
			score++;
		}
		inst();
	}
}
inst();

quiz.element.addEventListener("click", handleSubmit);