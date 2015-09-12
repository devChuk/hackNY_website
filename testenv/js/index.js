function slide() {
	$( "#hack" ).animate({width: "512px", "padding-right": 38});
}

setTimeout(function() {
    $( "#N" ).css('visibility','visible').animate({width:"190px", 'padding-right':2, "padding-left":0}, 400).animate({width:"179px"}, 200);
}, 1000);

setTimeout(function() {
    $( "#Y" ).css('visibility','visible').animate({width:"190px", 'padding-right':0, "padding-left":2}, 400).animate({width:"179px"}, 200, slide);
}, 1050);