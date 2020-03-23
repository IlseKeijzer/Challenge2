

// what do i want?
// 	- Animation for demons
// 		- standard, (can i turn the image around?)
// 		- when the button is pressed
// 	- Alerts on the button
// 		- array of phrases (can i randomize the phrases?)
// 	- Color changing depending on the time

function fillClock(){
	var date= getCurrentDate(new Date());
	var time = getCurrentTime(new Date());
	var clock = document.getElementById('clock');

	clock.innerHTML = date['day'] + ' ' + date['number'] + ' ' + date['month'] + '<br>' + time['hours'] + ':' + time['minutes'] + ':' + time['seconds'] + ' CEST';
	var t = setTimeout(fillClock, 500);

	function getCurrentDate(orange){
		var date = [];
		var dagen = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
		var maanden = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

		date['day'] = dagen[orange.getDay()];
		date['number'] = orange.getDate();
		date['month'] = maanden[orange.getMonth()];

		if (date['day'] < 10) {
			time['day'] = '0' + time['day'];
		}

		return date;
	}
	function getCurrentTime(apple){
		var time = [];

		time['hours'] = apple.getHours();
		time['minutes'] = apple.getMinutes();
		time['seconds'] = apple.getSeconds();

		// hours: add leading zero
		if (time['hours'] < 10) {
			time['hours'] = '0' + time['hours'];
		}

		// minutes: add leading zero
		if (time['minutes'] < 10) {
			time['minutes'] = '0' + time['minutes'];
		}

		// seconds: add leading zero
		if (time['seconds'] < 10) {
			time['seconds'] = '0' + time['seconds'];
		}

		return time;
	}
	if(time['hours'] >= 12 && time['hours'] <= 18){
		document.body.style.backgroundImage = "linear-gradient(#DBFEFF, #7CE1FF)";
		document.getElementById("container").style.backgroundColor = "white";
		document.getElementById("clock").style.color = "black";

		document.getElementById("alert").style.backgroundColor = "#F5F4C3";
		document.getElementById("alert").style.color = "black";

		document.getElementById("animate").style.backgroundColor = "#B1F6FF";
		document.getElementById("animate").style.color = "black";
		
		document.getElementById("foreground").style.backgroundImage = "url('images/clouds.png')";
		document.getElementById("demon").style.backgroundImage = "url('images/demon_flying.png')";
		document.getElementById("demon").style.backgroundSize = "185px 150px";
		document.getElementById("demon").style.width = '185px';
		document.getElementById("demon").style.bottom = '20px';
	}

	if(time['hours'] >= 18 && time['hours'] <= 24){
		document.body.style.backgroundImage = "linear-gradient(#DFAEF5, #FFB560)";
		document.getElementById("container").style.backgroundColor = "black";
		document.getElementById("clock").style.color = "white";

		document.getElementById("alert").style.backgroundColor = "#F0B1A4";
		document.getElementById("alert").style.color = "white";

		document.getElementById("animate").style.backgroundColor = "#7A62AE";
		document.getElementById("animate").style.color = "white";
		
		document.getElementById("foreground").style.backgroundImage = "url('images/grass_black.png')";
		document.getElementById("demon").style.backgroundImage = "url('images/demon_evening.png')";
		document.getElementById("demon").style.backgroundSize = "185px 170px";
		document.getElementById("demon").style.width = '185px';
		document.getElementById("demon").style.bottom = '30px';
	}

	if(time['hours'] >= 0 && time['hours'] <= 6){
		document.body.style.backgroundImage = "linear-gradient(#736CBF, #0B0E50)";
		document.getElementById("container").style.backgroundColor = "black";
		document.getElementById("clock").style.color = "white";

		document.getElementById("alert").style.backgroundColor = "#F0B1A4";
		document.getElementById("alert").style.color = "white";

		document.getElementById("animate").style.backgroundColor = "#7A62AE";
		document.getElementById("animate").style.color = "white";
		
		document.getElementById("foreground").style.backgroundImage = "url('images/water.png')";
		document.getElementById("foreground").style.backgroundSize = "200px 100px";
		document.getElementById("demon").style.backgroundImage = "url('images/demon_cthulhu.png')";
		document.getElementById("demon").style.backgroundSize = "185px 150px";
		document.getElementById("demon").style.width = '200px';
		document.getElementById("demon").style.height= '150px';
		document.getElementById("demon").style.bottom = '50px';
	}
	

}

fillClock();
setInterval(fillClock, 60000);

var animate = document.getElementById('animate');
var phrase = document.getElementById('alert');

phrase.onclick = function tellMeSomething(){
	var texts = [
		"Today is going to be a good day.", 
		"Eat something delicious today!", 
		"Don't forget to enjoy yourself.", 
		"You're amazing!", 
		"You might enjoy being social today.",
		"Did you know the Beasts are actually friendly?",
		"The Beast shows up frequently to check on you, they worry too you know.",
		"A new Beast will come greet you when the day progresses, say Hello!"
	];
	var text = texts[Math.floor(Math.random() * texts.length)];;
	alert(text);
}

var demon = document.getElementById('demon');

animate.onclick = function callTheBeast(){
	//demon.style.animationPlayState = 'running';
	//demon.addEventListener("animationiteration", AnimationListener, false);
	demon.classList.remove("animated");
	void demon.offsetWidth; // trigger a DOM reflow
	demon.classList.add("animated");
}

