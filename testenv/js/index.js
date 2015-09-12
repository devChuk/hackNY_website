var logoUnits = {
	hWidth: 512,
	hPR: 38,
	nyPop: 190,
	nyEnd: 179
};

function slide() {
	$( "#hack" ).animate({width: logoUnits.hWidth + "px", "padding-right": logoUnits.hPR});
}

$(function() {
	if (window.innerWidth < 992) {
		var logoWidth = 700;
		if (window.innerWidth < 768 && window.innerWidth >= 480) {
			logoWidth = 450;
		} else if (window.innerWidth < 480) {
			logoWidth = 350;
		}
		for (var key in logoUnits) {
			logoUnits[key] = Math.round(logoWidth * logoUnits[key] / 918);
			console.log(logoWidth);
			console.log(key + logoUnits[key]);
		}
	}

	setTimeout(function() {
	    $( "#N" ).css('visibility','visible').animate({width: logoUnits.nyPop + "px", 'padding-right':2, "padding-left":0}, 400).animate({width: logoUnits.nyEnd + "px"}, 200);
	}, 1000);

	setTimeout(function() {
	    $( "#Y" ).css('visibility','visible').animate({width: logoUnits.nyPop + "px", 'padding-right':0, "padding-left":2}, 400).animate({width: logoUnits.nyEnd + "px"}, 200, slide);
	}, 1050);
});