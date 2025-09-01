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


$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
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

$(document).ready(function() {
    $("#dropdownitems").click(function(){
        $(".dropitems").slideToggle();
        if ($(".dropitems2").is(':visible')) {
            $(".dropitems2").slideToggle();
        }
    });
    $("#dropdownitems2").click(function(){
        $(".dropitems2").slideToggle();
        if ($(".dropitems").is(':visible')) {
            $(".dropitems").slideToggle();
        }
    });
    
});


//------------------------------------MODAL SCRIPTS------------------------------------
//detect click outside of modal; if so, close modal
$(document).click(function(e){
    var clickElement = e.target;  // get the dom element clicked.
    var elementClassName = e.target.className;  // get the classname of the element clicked
    myModal = document.getElementById("myModal");
    opacity = window.getComputedStyle(myModal).getPropertyValue("opacity"); //check visibility of modal

    //if clicked on modal or image (not next/prev buttons) and the modal is visible, close modal
    if (elementClassName == "slide" && opacity==1) {
      closeModal();
    }
    else if (elementClassName == "modal" && opacity==1) {
      closeModal();
    }
    //alert(elementClassName); check class name
});
//arrow keys simulate next and prev
  document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
            //left
            plusSlides(-1);
            break;
        case 38:
            //up
            break;
        case 39:
            //right
            plusSlides(1);
            break;
        case 40:
            //down
            break;
        case 27:
            //esc
            closeModal();
            break;
    }
  };
