$( document ).ready(function() {

    var setClock = 600;

    $('.clock').each(function() {
        var clock = $(this);
        clock.FlipClock(setClock, {
            clockFace: 'HourlyCounter',
            countdown: true,
            language: 'it',
            autoStart:true
        });
    });

    $('.faq_list h2').click(function (e) {
        $(this).next('.result').slideToggle();
        $(this).toggleClass('active');
    });

    $('select').niceSelect();

    if (screen.width < 768) {
        $('.slick').slick({
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true,
            arrows:false,
            responsive: [
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        })
    }
    function resizeViseo() {
        var video = $('video');
        var videoWidth = video.width();
        var videoHeight = videoWidth*0.60;
        video.css('height',videoHeight);
    }
    resizeViseo();

    $( window ).resize(function() {
        resizeViseo();
    });

    $('.play_cover').click(function () {
        $(this).hide();
        const vid2 = document.getElementById("click-img");
        const vid = document.getElementById("top_video");
        $(vid2).hide();
        // vid.controls = false;
        vid.play();
    });

});
