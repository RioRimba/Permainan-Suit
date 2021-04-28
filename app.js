let pemainScore = 0;
let botScore = 0;
const pemainScore_span = document.getElementById("pemain-score");
const botScore_span = document.getElementById("bot-score");
const scoreBoard_div = document.querySelector(".score-board");
const hasil_p = document.querySelector(".hasil > p");
const batu_div = document.getElementById("b");
const gunting_div = document.getElementById("g");
const kertas_div = document.getElementById("k");


function botRng(user, bot) {
	const pilihan = ['b', 'g', 'k'];
	const randomNumber = (Math.floor(Math.random() * 3));
	return pilihan[randomNumber];
}

function convert(letter) {
	if (letter === "b") return "Batu";
	if (letter === "g") return "Gunting";
	if (letter === "k") return "Kertas";
}

function menang(pilihanPemain, bot) {
	const smallPemain = "pemain".fontsize(3).sup();
	const smallBot = "bot".fontsize(3).sup();
	const pilihanPemain_div = document.getElementById(pilihanPemain);
	pemainScore++;
	pemainScore_span.innerHTML = pemainScore;
	botScore_span.innerHTML = botScore;
	hasil_p.innerHTML = convert(pilihanPemain) + smallPemain + " Mengalahkan " + convert(bot) + smallBot + ".Anda Menang";
	pilihanPemain_div.classList.add('menang-effect');
	setTimeout(function() { pilihanPemain_div.classList.remove('menang-effect') }, 300);
}

function kalah(pilihanPemain, bot) {
	const smallPemain = "pemain".fontsize(3).sup();
	const smallBot = "bot".fontsize(3).sup();
	const pilihanPemain_div = document.getElementById(pilihanPemain);
	botScore++;
	pemainScore_span.innerHTML = pemainScore;
	botScore_span.innerHTML = botScore;
	hasil_p.innerHTML = convert(pilihanPemain) + smallPemain + " Dikalahkan " + convert(bot) + smallBot + ".Anda Kalah";
	pilihanPemain_div.classList.add('kalah-effect');
	setTimeout(function() { pilihanPemain_div.classList.remove('kalah-effect') }, 300);
}

function seri(pilihanPemain, bot) {
	const smallPemain = "pemain".fontsize(3).sup();
	const smallBot = "bot".fontsize(3).sup();
	const pilihanPemain_div = document.getElementById(pilihanPemain);
	hasil_p.innerHTML = convert(pilihanPemain) + smallPemain + " Melawan " + convert(bot) + smallBot + ".Seri";
	pilihanPemain_div.classList.add('seri-effect');
	setTimeout(function() { pilihanPemain_div.classList.remove('seri-effect') }, 300);
}



function game(pilihanPemain) {
	const bot = botRng();
	switch (pilihanPemain + bot){
		case "bg":
		case "kb":
		case "gk":
			menang(pilihanPemain, bot);
			break;
		case "bk":
		case "gb":
		case "kg":
			kalah(pilihanPemain, bot);
			break;
		case "bb":
		case "kk":
		case "gg":
			seri(pilihanPemain, bot);
			break;
	}
}

function main(){
	batu_div.addEventListener('click', function() {
		game("b");
	})

	gunting_div.addEventListener('click', function() {
		game("g");
	})
	
	kertas_div.addEventListener('click', function() {
		game("k");
	})
}

main();

