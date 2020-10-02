
/*/Карусель/*/

$(function() {
	$(".owl-carousel").owlCarousel({
		autoplay:true,
		nav:true,
		navText : ["Пред.","След."],
		loop:true,
		singleItem : true,
		autoplaySpeed: 2000,
		responsiveClass:true,
		responsive:{
        0:{
            items:1,
        },    
    },
	});
});

/*/Кнопка заказать/*/

$('.knopka').click(function(){
    $('.shade_7').fadeIn("fast");
})

$('.close_button').click(function(){
    $('.shade_7').fadeOut("fast");
})

/*/Паралакс/*/

$(window).on('mousemove', function(e){
	var w = $(window).width();
	var h = $(window).height();

	var offsetX = 0.5 - e.pageX / w;
	var offsetY = 0.5 - e.pageY / h;

	$(".paralax").each(function(i,el){
		var offset = parseInt($(el).data('offset'));

		var translate = "translate3d(" + Math.round(offsetX * offset)
		+ "px," + Math.round(offsetY * offset) + "px, 0px";

		$(el).css({
			'transform':translate
		})
	})
})