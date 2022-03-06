$(document).ready(function(){
	var aboutTopPosition = jQuery('#about').offset().top;

	// When #scroll is clicked
	jQuery('#scroll').click(function(){
		// Scroll down to 'catTopPosition'
		jQuery('html, body').animate({scrollTop:catTopPosition}, 'slow');
		// Stop the link from acting like a normal anchor link
		return false;
	});
});


$(document).ready(function() {

    $('.center-con').on('webkitAnimationEnd', function(e) {
    $(this).addClass('visible');
  });

    $('.bgimage').on('webkitAnimationEnd', function(e) {
    $(this).addClass('visible');
  });

});

$(function() {
$("#dropdownitems").click(function(){
	$(".dropitems").slideToggle();
});
});
