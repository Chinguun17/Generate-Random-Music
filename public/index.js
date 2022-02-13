

var alternatives = [
	["https://youtube.com/embed/US0CUegPr3g", "Radiohead - Creep"],

	["https://youtube.com/embed/LZmtl3l1R9A", "Marc Rebillet - SORRY TO BOTHER YOU"],

	["https://youtube.com/embed/F7CIlL-z8DQ", "Chris Cornell - Black Hole Sun Acoustic"],

	["https://youtube.com/embed/NAOKzvL8dgk", "Sinéad O'Connor - Nothing Compares 2 U"],

];
//var alternativesNames = [
//"Radiohead - Creep", 
//"Marc Rebillet - SORRY TO BOTHER YOU", 
//"Chris Cornell - Black Hole Sun Acoustic", 
//"Sinéad O'Connor - Nothing Compares 2 U", 
//]



var blues = [
	["https://youtube.com/embed/JIiYMtFO3hA", "Oli Brown - I love you more than You'll ever know"],


	["https://youtube.com/embed/79WyeguRxbY", "Gary B.B. Coleman - Sky is crying"],

	["https://youtube.com/embed/3uneA-cstZs", "B.B.  King - The thrill is gone"],

	["", ""]
];
//var bluesNames = [
//"Oli Brown - I love you more than You'll ever know",
//"Gary B.B Coleman - Sky is crying",
//"B.B.  King - The thrill is gone",
//"",
//]



var library = [
	"alternatives",
	alternatives,
	"blues",
	blues,
];


const starClassActive = "rating__star fas fa-star";

const starClassUnactive = "rating__star far fa-star";

const ratingStars = [...document.getElementsByClassName("rating__star")];

const ratingResult = document.querySelector(".rating__result");

document.querySelector('.addList-btn').addEventListener('click', showListForm)

function showListForm(){
	document.querySelector(".list-form").style.display= "block";
}

//document.querySelector(".fa-times-circle").addEventListener('click', hideRegister);

//function hideRegister() {
//	document.querySelector("#register-container").style.display= "none";
//}

document.querySelector("#generatebutton").addEventListener('click', function() {
	generating(ratingStars, ratingResult);
});



printRatingResult(ratingResult);

function printRatingResult(res, num = 0) {
   res.textContent = `${num}/5`;
   console.log(num)
}


executeRating(ratingStars, ratingResult);

function executeRating(stars, res) {


	const starsLength = stars.length;
	let i;
	stars.map((star) => {
	   star.onclick = () => {
		  i = stars.indexOf(star);
		  
		  //document.querySelector("#register-container").style.display= "block";

		  if (star.className.indexOf(starClassUnactive) !== -1) {
			 printRatingResult(res, i + 1);

			 for (i; i >= 0; --i) stars[i].className = starClassActive;

 
		  } else {

			 printRatingResult(res, i);
			 for (i; i < starsLength; ++i) stars[i].className = starClassUnactive;
		  }

	    };
		 
	});
 }




function generating(stars, res) {

	const selectedValue = document.querySelector('select').value;

	const genre = document.querySelector('#genres');

	genre.onchange = function(){
		generatebutton.innerHTML = "Generate";
	}

	
	for (let i=0; i<=library.length; i++) {
		if ( selectedValue == library[i]) {
      		let genre = library[i];
			let index = library.indexOf(genre) + 1;
			let list = library[index];
			let random = list[Math.floor(Math.random() * list.length)];
			videoTitle.innerHTML = random[1];
			document.getElementById("player").src = random[0];
		}
	}
	generatebutton.innerHTML = "Regenerate";

	/*const starsLength = stars.length;*/
	let i;
	stars.map((star) => {
		i = stars.indexOf(star);
		star.className = starClassUnactive;
		printRatingResult(res, i * 0);
	})

			
};







function generatingOld() {
	const selectedValue = document.querySelector('select').value;	
	if (selectedValue === "alternative") {
		var alternative = alternatives[Math.floor(Math.random() * alternatives.length)];

		document.getElementById("player").src = alternative[0];

		display.innerHTML = alternative[1];

		

		//for (let i=0; i<=alternatives.length; i++) {

			//if (alternative === alternatives[i]){
				//display.innerHTML = alternativesNames[i];

			//}
		//}
	}



	if (selectedValue === "blues") {
		var blue = blues[Math.floor(Math.random() * blues.length)];

		document.getElementById("player").src = blue[0];

		display.innerHTML = blue[1];

		

	}



	if (selectedValue === "classical") {
		var classical = classicals[Math.floor(Math.random() * classicals.length)];

		document.getElementById("player").src = classical;


		display.innerHTML = classical[1];

	}



	if (selectedValue === "country") {
		var country = countries[Math.floor(Math.random() * countries.length)];

		document.getElementById("player").src = country;


		display.innerHTML = country[1];

	}



	if (selectedValue === "edm") {
		var edm = edms[Math.floor(Math.random() * edms.length)];

		document.getElementById("player").src = edm;


		display.innerHTML = edm[1];

	}



	if (selectedValue === "folk") {
		var folk = folks[Math.floor(Math.random() * folks.length)];

		document.getElementById("player").src = folk;


		display.innerHTML = folk[1];	

	}



	if (selectedValue === "hiphop") {
		var hipHop = hipHops[Math.floor(Math.random() * hipHops.length)];

		document.getElementById("player").src = hipHop;


		display.innerHTML = hipHop[1];

	}



	if (selectedValue === "indierock") {
		var indieRock = indieRocks[Math.floor(Math.random() * indieRocks.length)];

		document.getElementById("player").src = indieRock;

		display.innerHTML = indieRock[1];
	}



	if (selectedValue === "kpop") {
		var kPop = kPops[Math.floor(Math.random() * kPops.length)];

		document.getElementById("player").src = kPop;

		display.innerHTML = kPop[1];
	}



	if (selectedValue === "latin") {
		var latin = latins[Math.floor(Math.random() * latins.length)];

		document.getElementById("player").src = latin;


		display.innerHTML = latin[1];
	}



	if (selectedValue === "metalrock") {
		var metalRock = metalRocks[Math.floor(Math.random() * metalRocks.length)];

		document.getElementById("player").src = metalRock;

		display.innerHTML = metalRock[1];

	}



	if (selectedValue === "opera") {
		var opera = operas[Math.floor(Math.random() * operas.length)];

		document.getElementById("player").src = opera;

		display.innerHTML = opera[1];

	}



	if (selectedValue === "pop") {
		var pop = pops[Math.floor(Math.random() * pops.length)];

		document.getElementById("player").src = pop;

		display.innerHTML = pop[1];

	}



	if (selectedValue === "rnbsoul") {
		var rNbSoul = rNbSouls[Math.floor(Math.random() * rNbSouls.length)];

		document.getElementById("player").src = rNbSoul;

		display.innerHTML = rNbSoul[1];
	}

	document.getElementById('fromWiki').value = display.innerHTML;

	generateButton.innerHTML = "Regenerate";
		
}

function generatingArticle() {

}

var alternatives = [
	["https://youtube.com/embed/US0CUegPr3g", "Radiohead - Creep"],

	["https://youtube.com/embed/LZmtl3l1R9A", "Marc Rebillet - SORRY TO BOTHER YOU"],

	["https://youtube.com/embed/F7CIlL-z8DQ", "Chris Cornell - Black Hole Sun Acoustic"],

	["https://youtube.com/embed/NAOKzvL8dgk", "Sinéad O'Connor - Nothing Compares 2 U"],

];
//var alternativesNames = [
//"Radiohead - Creep", 
//"Marc Rebillet - SORRY TO BOTHER YOU", 
//"Chris Cornell - Black Hole Sun Acoustic", 
//"Sinéad O'Connor - Nothing Compares 2 U", 
//]



var blues = [
	["https://youtube.com/embed/JIiYMtFO3hA", "Oli Brown - I love you more than You'll ever know"],


	["https://youtube.com/embed/79WyeguRxbY", "Gary B.B. Coleman - Sky is crying"],

	["https://youtube.com/embed/3uneA-cstZs", "B.B.  King - The thrill is gone"],

	["", ""]
]
//var bluesNames = [
//"Oli Brown - I love you more than You'll ever know",
//"Gary B.B Coleman - Sky is crying",
//"B.B.  King - The thrill is gone",
//"",
//]



var classicals = [
"",
"",
"",
]
var classicalsNames = [
"",
"",
"",
]



var countries = [
"",
"",
"",
]



var edms = [
"",
"",
"",
]



var folks = [
"",
"",
"",
]



var hiphops = [
"",
"",
"",
]




var indieRocks = [
"",
"",
"",
]




var kpops = [
"",
"",
"",
]



var latins = [
"",
"",
"",
]



var metalRocks = [
"",
"",
"",
]




var operas = [
"",
"",
"",
]




var pops = [
"",
"",
"",
]




var rNbSouls = [
"",
"",
"",
]