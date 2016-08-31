var n;
var orbX, orbX_CS;
var orientation;

var start = function() {
	generator();
	var main = setInterval(function(){ alterations(); }, 8000);

	if (window.innerHeight > window.innerWidth) {
		orientation = "portrait";
	} else {
		orientation = "landscape";
	}
}

var generator = function() {
	
	for (n=0; n < 10; n++) {	
		var orbCont0 = document.getElementById("orbCont0");

		var temp1 = document.createElement("div");
		temp1.id = "orb" + n;
		temp1.className = "orb";

		// console.log(Math.floor((Math.random() * 1000) + 1))
		orbCont0.appendChild(temp1);
	}	
	alterations();
}

var alterations = function() {
	for (n=0; n < 10; n++) {	
		orbX = document.getElementById("orb" + n);
		orbX_CS = window.getComputedStyle(orbX);

		transitions();
		sizing();
		positioning();
	}
}

var positioning = function() {
	orbX.style.left = Math.floor((Math.random() * (window.innerWidth - parseInt(orbX_CS.width)))) + "px";
	orbX.style.top = Math.floor((Math.random() * (window.innerHeight - parseInt(orbX_CS.height)))) + "px";
	// console.log(orbX.style.left);
}

var sizing = function() {
	
	if (orientation == "portrait") {
		var orbWidth = Math.floor((Math.random() * (window.innerWidth/2))) + "px";
	} else {
		var orbWidth = Math.floor((Math.random() * (window.innerHeight/2))) + "px";
	}

	orbX.style.width = orbWidth;
	orbX.style.height = orbWidth;
	orbX.style.opacity = parseFloat(Math.random()).toFixed(2);
	orbX.style.backgroundColor = "rgb(" + parseInt(Math.random()*256) + "," + parseInt(Math.random()*256) + "," + parseInt(Math.random()*256) + ")";
	console.log(orbX.style.backgroundColor);
	console.log(parseInt(Math.random()*256));
		// parseInt(Math.random()*256); + "," + 
		// parseInt(Math.random()*256); + "," 
		// parseInt(Math.random()*256); + ")"

	// console.log(orbX.style.opacity);
	// orbX.style.boxShadow; = Math.floor((Math.random() * (window.innerHeight - parseInt(orbX_CS.height)))) + "px";
}

var transitions = function() {
	var ran0 = parseFloat(Math.random() * 15 + 5).toFixed(0);
	var ran1 = parseFloat(Math.random() * 10).toFixed(0);
	var ran2w = parseFloat(Math.random() * 20).toFixed(0);
	var ran3 = parseFloat(Math.random() * 20).toFixed(0);
	var windProportions = parseFloat(window.innerHeight / window.innerWidth).toFixed(2);
	
	// console.log(windProportions);
	
	

	if (orientation == "portrait") {
		ran2h = ran2w / windProportions;
		console.log("portrait");
	} else {
		ran2h = ran2w * windProportions;
		console.log("landscape");
	}

	orbX.style.transition = "left " + ran0 + "s, " + "top " + ran0 + "s, " 
		+ "opacity " + ran1 + "s, " 
		+ "width " + ran2w + "s, " + "height " + ran2h + "s, " 
		+ "background-color " + ran3 + "s "
		+ "linear";
	// console.log("left " + ran0 + "s, " + "top " + ran0 + "s, " + "opacity " + ran1 + "s " + "linear");
	// console.log(orbX.style.transition);
	positioning();
	sizing();
}