jQuery("document").ready(function($) {
  var menuBtn = $(".menu-icon"),
    menu = $(".navigation ul");
  menuBtn.click(function() {
    if (menu.hasClass("show")) {
      menu.removeClass("show");
    } else {
      menu.addClass("show");
    }
  });
});

jQuery("document").ready(function($) {
  var menuBtn = $(".navigation"),
    menu = $(".navigation ul");
  menuBtn.click(function() {
    if (menu.hasClass("show")) {
      menu.removeClass("show");
    } else {
      menu.addClass("show");
    }
  });
});

$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});