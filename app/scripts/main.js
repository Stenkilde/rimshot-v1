$(document).ready(function() {
	$(document).foundation();
	$(document).ready(function() {
		$(".trigger").click(function(){
			$(".nav-off-canv, .canv, .trigger").toggleClass("js-is-open");
		});
	});

	$.ionSound({
		sounds: [
		"ba_dumm"
		],
		path: "sounds/",
		multiPlay: false,
		volume: "1.0"
	});

	$("#badumm").on("click", function(){
		$('.playbutton').fadeOut().delay(3000).fadeIn();
		$('.wave').addClass('animate')
		.delay(3000)
		.queue(function() {
			$(this).removeClass('animate');
			$(this).dequeue();
		});;
		$.ionSound.play("ba_dumm");
	});
});
