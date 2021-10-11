<<<<<<< HEAD
$(document).ready(function() {
    $('.o-grid--left').hover(function () {
        $('.o-grid--3').removeClass('active');
        $(this).parent('.o-grid--3').addClass('active');
        $(this).closest('.o-grid').addClass('open');
        $('.o-grid--right').hide();
        $(this).next('.o-grid--right').show();
    });

    $('.o-grid').mouseleave(function () {
        $('.o-grid').removeClass('open');
        $('.o-grid--3').removeClass('active');
        $('.o-grid--right').hide();
    });

    $('.menu-icon').click(function () {
        $('nav').slideToggle();
    })

    $('nav ul li').each(function(index) {
        const count = index + 1;
        $(this).click(function() {
            console.log(count);
            if($(window).width() <= 960) {
                $('nav').slideUp('fast');
            }
            var element = document.querySelector('#section-'+ count)
            element.scrollIntoView({behavior: "smooth"});
        })
    })

    $('.cd-testimonials-wrapper').flexslider({
		selector: ".cd-testimonials > li",
		animation: "slide",
		controlNav: false,
		slideshow: false,
		smoothHeight: true,
		start: function(){
			$('.cd-testimonials').children('li').css({
				'opacity': 1,
				'position': 'relative'
			});
		}
	});

=======
$(document).ready(function() {
    $('.o-grid--left').hover(function () {
        $('.o-grid--3').removeClass('active');
        $(this).parent('.o-grid--3').addClass('active');
        $(this).closest('.o-grid').addClass('open');
        $('.o-grid--right').hide();
        $(this).next('.o-grid--right').show();
    });

    $('.o-grid').mouseleave(function () {
        $('.o-grid').removeClass('open');
        $('.o-grid--3').removeClass('active');
        $('.o-grid--right').hide();
    });

    $('.menu-icon').click(function () {
        $('nav').slideToggle();
    })

    $('nav ul li').each(function(index) {
        const count = index + 1;
        $(this).click(function() {
            console.log(count);
            if($(window).width() <= 960) {
                $('nav').slideUp('fast');
            }
            var element = document.querySelector('#section-'+ count)
            element.scrollIntoView({behavior: "smooth"});
        })
    })

    $('.cd-testimonials-wrapper').flexslider({
		selector: ".cd-testimonials > li",
		animation: "slide",
		controlNav: false,
		slideshow: false,
		smoothHeight: true,
		start: function(){
			$('.cd-testimonials').children('li').css({
				'opacity': 1,
				'position': 'relative'
			});
		}
	});

>>>>>>> 7d0678269b53e833b2834ce8977353a5b1c99594
})