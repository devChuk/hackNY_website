var logoUnits = {
	hWidth: 512,
	hPR: 38,
	nyPop: 190,
	nyEnd: 179
};
var o = {
	hWidth: 512,
	hPR: 38,
	nyPop: 190,
	nyEnd: 179
};
var layout;

function slide() {
	$( "#hack" ).animate({width: logoUnits.hWidth + "px", "padding-right": logoUnits.hPR});
	$( ".head-text h1" ).fadeIn();
	$("header").animate({bottom: "60px"}, function () {
		$(this).css({position: "absolute", bottom: "0px"});
	});
}

function screenCheck() {
	layout = 3;
	if (window.innerWidth < 992) {
		var logoWidth = 700;
		layout = 2;
		if (window.innerWidth < 768 && window.innerWidth >= 480) {
			logoWidth = 450;
			layout = 1;
		} else if (window.innerWidth < 480) {
			logoWidth = 350;
			layout = 0;
		}
		for (var key in o) {
			logoUnits[key] = Math.round(logoWidth * o[key] / 918);
		}
		return;
	}
	for (var key in o) {
		logoUnits[key] = o[key];
	}
}

$(function() {
	screenCheck();
	initial = 1;

	setTimeout(function() {
	    $( "#N" ).css('visibility','visible').animate({width: logoUnits.nyPop + "px", 'padding-right':2, "padding-left":0}, 400).animate({width: logoUnits.nyEnd + "px"}, 200);
	}, 0);

	setTimeout(function() {
	    $( "#Y" ).css('visibility','visible').animate({width: logoUnits.nyPop + "px", 'padding-right':0, "padding-left":2}, 400).animate({width: logoUnits.nyEnd + "px"}, 200, slide);
	}, 50);

	var scrollTimeout;
	$(window).on('scroll', function() {
    if ($(window).width() >= 786) {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(checkAndMoveNavbarPosition(), 250);
    }
  });

  /* move the nav bar as appropriate */
  var isFixed = false;
  var navbarHeight;
  var deltaLocation;
  recalculateNavbarPosition();
  function checkAndMoveNavbarPosition() {
    if (!isFixed && $(window).scrollTop() > deltaLocation) {
      $('header').css({position: "fixed", top: "0px", bottom: ""});
      isFixed = true;
    }
    else if (isFixed && $(window).scrollTop() < deltaLocation) {
		$('header').css({position: "absolute", top: "", bottom: "0px"});
      isFixed = false;
      $('header').show();
    }
  }

  function recalculateNavbarPosition() {
    navbarHeight = $('#navbar').outerHeight();
    deltaLocation = $('#splash').outerHeight() - navbarHeight;
  }
});

$( window ).resize(function() {
	var pastLayout = layout;
	screenCheck();
	if (pastLayout != layout) {
			$( "#N, #Y" ).css({width: logoUnits.nyEnd + "px"});
			$( "#hack" ).css({width: logoUnits.hWidth + "px", "padding-right": logoUnits.hPR})
	}
});