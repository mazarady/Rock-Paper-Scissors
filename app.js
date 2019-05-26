var user = 0;
var comp = 0;
const user_score = document.getElementById('user-score');
const comp_score = document.getElementById('comp-score');
const result = document.querySelector('.result > p');
const scoreboard = document.querySelector('.score-board');
const rock_div = document.getElementById('r')
const paper_div = document.getElementById('p')
const scissors_div = document.getElementById('s')


function random_choice () {
	const choices = ['r', 'p', 's'];
	return choices[Math.floor(Math.random() * choices.length)];

}

function win(user_selection){
	const user_green = document.getElementById(user_selection).classList;
	user_score.innerHTML = user;
	user_green.add('green-glow');
	setTimeout(function (){ user_green.remove('green-glow')}, 400)


}

function lose(user_selection){
	const user_red = document.getElementById(user_selection).classList;
	user_red.add('red-glow');
	setTimeout(function (){ user_red.remove('red-glow')}, 400)
	comp_score.innerHTML = comp ;
}

function tie(user_selection){
	const user_gray = document.getElementById(user_selection).classList;
	user_gray.add('gray-glow');
	setTimeout(function (){ user_gray.remove('gray-glow')}, 400)
}





function game (user_choice){
	const comp_choice = random_choice()
	console.log("User Choice " +  user_choice);
	console.log("Computer Choice " +  comp_choice);

	if (user_choice == comp_choice) {tie(user_choice);}
	else if (user_choice == 'r' && comp_choice == 's')
		{user++; win(user_choice); result.innerHTML = "Rock destroys scissors. You win."}
	else if (user_choice == 'p' && comp_choice == 'r') 
		{user++; win(user_choice); result.innerHTML = "Paper covers rock. You win."}
	else if (user_choice == 's' && comp_choice == 'p') 
		{user++; win(user_choice); result.innerHTML = "Scissors cuts paper. You win."}
	else if (comp_choice == 'r' && user_choice == 's') 
		{comp++; lose(user_choice);}
	else if (comp_choice == 'p' && user_choice == 'r') 
		{comp++; lose(user_choice);}
	else if (comp_choice == 's' && user_choice == 'p') 
		{comp++; lose(user_choice);}

}

function main (){
	rock_div.addEventListener('click', function () {
		game('r')
	})

	paper_div.addEventListener('click', function () {
		game('p')
	})

	scissors_div.addEventListener('click', function () {
		game('s')
	})
}
main();


