$(document).ready(function(){
    var gnbOffset = $('.com_mod_anchor').offset();
    $(window).scroll(function () {
        if ($(document).scrollTop() > gnbOffset.top) {
            $('.com_mod_header, .com_mod_anchor').addClass('fixed');
            var headerHeight = $('.com_mod_header').height();
            //console.log(headerHeight);
            $('.com_mod_anchor').css('top', headerHeight+48);
        } else {
            $('.com_mod_header, .com_mod_anchor').removeClass('fixed');
            $('.com_mod_anchor').css('top', 0);
        }
    });
});