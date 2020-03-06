$(document).ready(function(){
	$(".navbar").click(function () {
		var icon = $(".navbar i");

		if (icon.hasClass("fa-bars")) {
			icon.removeClass("fa-bars");
			icon.addClass("fa-times");
			$("nav").animate({ height: "300px" }, 500);
		} else {
			icon.removeClass("fa-times");
			icon.addClass("fa-bars");
			$("nav").animate({ height: "80px" }, 500);
		}
		$("main-nav").slideToggle(500);

	});

});	


