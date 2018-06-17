$(document).ready(function () {
    var images = [  "img/bg1.jpg",
                    "img/bg2.jpg",
                    "img/bg3.jpg"];
    
    var duration = 4000; // Ставте не менше 3000
    
    var i = 1;

    var imageSection = $("#fader");
    imageSection.parent().css({'background-image': 'url(' + images[0] + ')'});

    function csaHead() {

        if (i > (images.length - 1)) {
            imageSection.parent().css({'background-image': 'url(' + images[0] + ')'});
            imageSection.animate({
                'opacity': '0'
            }, 700, function () {
                i = 1;
                imageSection.css({
                    'background-image': 'url(' + images[0] + ')'
                });
            });
            imageSection.animate({
                'opacity': '1'
            }, 700);
        } else {
            if ( i != 1 ) imageSection.parent().css({'background-image': 'url(' + images[i-1] + ')'});
            imageSection.animate({
                'opacity': '0'
            }, 700, function () {
                imageSection.css({
                    'background-image': 'url(' + images[i] + ')'
                });
                i++;
            });
            imageSection.animate({
                'opacity': '1'
            }, 700);
        }
    }
    var intervalCsaHead = setInterval(csaHead, duration);
});