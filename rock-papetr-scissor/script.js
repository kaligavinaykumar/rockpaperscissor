let userScore = 0;
let computerScore = 0;
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
	const choices = ['r', 'p', 's'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}
function convertToWord(letter){
	if (letter === "r") return "Rock";
	if (letter === "p") return "Paper";
	return "Scissors";
}
/*function showCompChoice(compChoice){
	if (compChoice === "r"){
		rock_div.classList.add("comp-choice");
	}
	if (compChoice === "p"){
		paper_div.classList.add("comp-choice");
	}
	if (compChoice === "s"){
		scissors_div.classList.add("comp-choice");
	}
	setTimeout(hideChoices, 1500);
}
function hideChoices(){
	rock_div.classList.remove("comp-choice","user-choice");
	paper_div.classList.remove("comp-choice","user-choice");
	scissors_div.classList.remove("comp-choice","user-choice");
}*/
function win(userChoice, computerChoice){
	userScore++;
	const smallUserWord = "(user)".fontsize(3).sup();
	const smallCompWord = "(comp)".fontsize(3).sup();
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats  ${convertToWord(computerChoice)}${smallCompWord} .You win`;
	document.getElementById(userChoice).classList.add('green-glow');
	setTimeout(function() {document.getElementById(userChoice).classList.remove('green-glow')},1000);
}
function lose(userChoice, computerChoice){
	computerScore++;
	const smallUserWord = "(user)".fontsize(3).sup();
	const smallCompWord = "(comp)".fontsize(3).sup();
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats  ${convertToWord(computerChoice)}${smallCompWord} .You lost`;
	document.getElementById(userChoice).classList.add('red-glow');
	setTimeout(function() {document.getElementById(userChoice).classList.remove('red-glow')},1000);
}

function draw(userChoice, computerChoice){
	const smallUserWord = "(user)".fontsize(3).sup();
	const smallCompWord = "(comp)".fontsize(3).sup();
	result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats  ${convertToWord(computerChoice)}${smallCompWord} .You win`;
	document.getElementById(userChoice).classList.add('gray-glow');
	setTimeout(function() {document.getElementById(userChoice).classList.remove('gray-glow')},1000);
}


function game(userChoice){
	const computerChoice = getComputerChoice();
	switch(userChoice + computerChoice){
		case "rs":
		case "sp":
		case "pr":
			win(userChoice, computerChoice);
			break;
		case "sr":
		case "ps":
		case "rp":
			lose(userChoice, computerChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice, computerChoice);
			break;		
	}
}

function main(){
	rock_div.addEventListener('click', function(){
		game("r");
		rock_div.classList.add("user-choice");
	});

	paper_div.addEventListener('click', function(){
		game("p");
		paper_div.classList.add("user-choice");
	});

	scissors_div.addEventListener('click', function(){
		game("s");
		scissors_div.classList.add("user-choice");
	})
};

main();