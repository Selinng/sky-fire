// 换肤键功能
(function(){
	var skin = document.getElementById('skin');
	var clouds = skin.getElementsByTagName('button')[0];
	var stars = skin.getElementsByTagName('button')[1];
	clouds.onclick = function(){
		document.getElementById('background').removeAttribute("style");
		document.getElementById('midground').removeAttribute("style");
		document.getElementById('foreground').removeAttribute("style");
		clouds.disabled = "disabled";
		clouds.className += " skin_select";
		stars.removeAttribute("disabled");
		stars.className = "skin_stars";
	}
	stars.onclick = function(){
		document.getElementById('background').style.backgroundImage="url('images/stars/background.png')";
		document.getElementById('midground').style.backgroundImage="url('images/stars/midground.png')";
		document.getElementById('foreground').style.backgroundImage="url('images/stars/foreground.png')";
		stars.disabled = "disabled";
		stars.className += " skin_select";
		clouds.removeAttribute("disabled");
		clouds.className = "skin_clouds";
	}
})();