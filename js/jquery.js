$(document).ready(function(){
	$(".menu__nav-icon").click(function () {
		var icon = $(".menu__nav-icon i");

		if (icon.hasClass("fa-bars")) {
			icon.removeClass("fa-bars");
			icon.addClass("fa-times");
			$("nav").animate({ height: "250px" }, 500);
		} else {
			icon.removeClass("fa-times");
			icon.addClass("fa-bars");
			$("nav").animate({ height: "80px" }, 500);
		}
		$("menu__nav-list").slideToggle(500);

	});

});	


