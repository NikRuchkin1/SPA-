$(".main_mnu_button").click(function() {
		$(".maian_mnu ul").slideToggle();
	});



$(function() {
	$(".owl-carousel").owlCarousel({
		autoplay:true,
		nav:false,
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

$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь

            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
