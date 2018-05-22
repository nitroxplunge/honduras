var scrolllen = 2;
var scrollcurr = 0;

$(document).ready(function (){
    $(document).keydown(function (evt) {
        if (evt.keyCode == 39 || evt.keyCode == 40) {
            scrollcurr++;
            if (scrollcurr >= scrolllen) {
                scrollcurr = 0;
            }
        }
        else if (evt.keyCode == 37 || evt.keyCode == 38) {
            scrollcurr--;
            if (scrollcurr < 0) {
                scrollcurr = scrolllen - 1;
            }
        }
        else {
            return;
        }
        $('html, body').stop();
        $('html, body').animate({
            scrollTop: $("#scroll" + scrollcurr).offset().top
        }, 1000);
        console.log("scrolled to " + scrollcurr);
    });
});