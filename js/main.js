/* main scripts */

$(function(){
	$("#openMenu").click(function(e){
		e.preventDefault();
		$(this).toggleClass("active");
		$(this).children("i").toggleClass('fa-minus fa-bars');
		$("#headerMenu").toggle(200);
	})
})
