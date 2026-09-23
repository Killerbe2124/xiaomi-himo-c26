$(function(){
    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    $('.bike-slider').slick({
        arrows: true,
        dots: true,
        fade: true,
        autoplay: !prefersReducedMotion,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        pauseOnFocus: true,
        accessibility: true,
        prevArrow: '<button type="button" class="slick-prev" aria-label="Предыдущий слайд"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg></button>',
        nextArrow: '<button type="button" class="slick-next" aria-label="Следующий слайд"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function(e) {
        var target = this.hash;
        if (!target || target === '#') {
            return;
        }
        var $target = $(target);
        if ($target.length) {
            e.preventDefault();
            if (prefersReducedMotion) {
                $('html, body').scrollTop($target.offset().top);
            } else {
                $('html, body').animate({
                    'scrollTop': $target.offset().top
                }, 500, 'swing');
            }
        }
    });
});