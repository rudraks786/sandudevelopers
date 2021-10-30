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
	
	  $('nav ul li').click(function(){
    $('nav ul li').removeClass("active");
    $(this).addClass("active");
});
	
    $('.o-slider').bxSlider({
        pager: false,
    });

  $('.owl-carousel').owlCarousel({
    nav: false,
	dots: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
	margin: 20,
	slideSpeed: 3000,
	animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    responsive: {
        0:{
            items: 1
        },
        600:{
            items: 2
        },
		960: {
			items: 3
		}
    }
});
	
	
	

var setMinHeight = function(minheight = 0) {
  jQuery('.owl-carousel').each(function(i,e){
    var oldminheight = minheight;
    jQuery(e).find('.owl-item').each(function(i,e){
      minheight = jQuery(e).height() > minheight ? jQuery(e).height() : minheight;    
    });
    jQuery(e).find('.item').css("min-height",minheight + "px");
    minheight = oldminheight;
  });
};

	setMinHeight();


$(document).on('resize', function(){
		setMinHeight();
});

})