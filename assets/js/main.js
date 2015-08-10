$(document).ready(function() {

	///// Mobile Nav /////

	$('.mobile-nav-toggle').click(function(){
		$('.ion-close-round').toggleClass('showing');
		$('.ion-android-menu').toggleClass('not-showing');
		$('.mobile-nav').toggleClass('open');
	});

	///// Mobile Shoe Nav /////

	$('.mobile-shoe-nav span').click(function(){

		$(this).siblings().removeClass('active');
		$(this).addClass('active');

		if ($(this).data('image') == 'image2') {

			$('.shoe-type img:nth-child(2)').addClass('active-main');
			$('.shoe-type img:nth-child(2)').siblings().removeClass('active-main');

		} else if ($(this).data('image') == 'image3') {

			$('.shoe-type img:nth-child(3)').addClass('active-main');
			$('.shoe-type img:nth-child(3)').siblings().removeClass('active-main');

		} else {

			$('.shoe-type img:nth-child(1)').addClass('active-main');
			$('.shoe-type img:nth-child(1)').siblings().removeClass('active-main');

		}
	});

	///// Shoe Display Interactions /////

	$('.shoe-select-border').click(function() {

		$('.shoe-select-border').removeClass('active');
		$(this).addClass('active');

		if ($('.shoe-select',this).data('image') == 'image2') {

			$('.shoe-type img:nth-child(2)').addClass('active-main');
			$('.shoe-type img:nth-child(2)').siblings().removeClass('active-main');

		} else if ($('.shoe-select',this).data('image') == 'image3') {

			$('.shoe-type img:nth-child(3)').addClass('active-main');
			$('.shoe-type img:nth-child(3)').siblings().removeClass('active-main');

		} else {
			$('.shoe-type img:nth-child(1)').addClass('active-main');
			$('.shoe-type img:nth-child(1)').siblings().removeClass('active-main');
		}

	});
	
	//// Smooth Scroll ////

	$('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });

});
