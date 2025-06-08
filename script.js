$(document).ready(function() {
    // mobilne menu
    $('.mobile-menu-toggle').click(function() {
        $(this).toggleClass('active');
        $('.nav-list').toggleClass('active');
        $('body').toggleClass('menu-open');
    });

    // scrollovanie
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate(
            {
                scrollTop: $($(this).attr('href')).offset().top - 80,
            },
            500,
            'linear'
        );
    });

    // hlavicka pri scrollovani
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('header').addClass('scrolled');
        } else {
            $('header').removeClass('scrolled');
        }
    });

    // animacie
    $(window).scroll(function() {
        $('.feature').each(function() {
            var pozicia = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var vyskaOkna = $(window).height();
            
            if (scroll > pozicia - vyskaOkna + 100) {
                $(this).addClass('animated');
            }
        });
    });

    // pulz tlacitka
    setInterval(function() {
        $('.hero .btn').toggleClass('pulse');
    }, 2000);
});

// lightbox
$(function() {
    $('body').append('<div id="lightbox"><img><div class="caption"></div></div>');
    
    $('.gallery-item img').click(function() {
        $('#lightbox').css('display', 'flex').find('img').attr('src', $(this).attr('src'))
            .end().find('.caption').text($(this).next('.gallery-caption').text());
        $('body').css('overflow', 'hidden');
    });

    $('#lightbox').click(function() {
        $('#lightbox').hide();
        $('body').css('overflow', 'auto');
    });
    $(document).keydown(function(e) {
        if (e.key === 'Escape') {
            $('#lightbox').hide();
            $('body').css('overflow', 'auto');
        }
    });
});

// animacia cisel
$(document).ready(function() {
    function animujStatistiky() {
        $('.stat-number').each(function() {
            var element = $(this);
            var ciel = parseInt(element.data('count'));
            var cas = 2000;
            var start = 0;
            var krok = ciel / (cas / 16);
            
            var timer = setInterval(function() {
                start += krok;
                if (start >= ciel) {
                    clearInterval(timer);
                    start = ciel;
                }
                element.text(Math.floor(start));
            }, 16);
        });
    }

    $(window).scroll(function() {
        var pozicia = $('.stats-section').offset().top;
        var scrollPozicia = $(window).scrollTop() + $(window).height();
        
        if (scrollPozicia > pozicia) {
            animujStatistiky();
            $(window).off('scroll');
        }
    });

    if ($('.stats-section').offset().top < $(window).height()) {
        animujStatistiky();
    }
});

// kontaktny formular
$(document).ready(function() {
    $('#contactForm').submit(function(e) {
        e.preventDefault();
        
        var udaje = $(this).serialize();
        console.log('Formular odoslany:', udaje);
        
        alert('Dakujeme za spravu! Budeme vas kontaktovat.');
        
        $(this).trigger('reset');
    });
    
    $('.contact-map iframe').on('load', function() {
        $(this).css('opacity', 1);
    }).css('opacity', 0);
});