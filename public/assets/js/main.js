/*
    Fractal by HTML5 UP
    html5up.net | @ajlkn
    Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

    skel.breakpoints({
        xlarge: '(max-width: 1680px)',
        large: '(max-width: 1280px)',
        medium: '(max-width: 980px)',
        small: '(max-width: 736px)',
        xsmall: '(max-width: 480px)',
        xxsmall: '(max-width: 360px)'
    });

    hljs.initHighlightingOnLoad();

    $(function() {

        var $window = $(window),
            $body = $('body'),
            $navbar = $('#navbar');

        getLatestRelease();

        // Disable animations/transitions until the page has loaded.
        $body.addClass('is-loading');

        $window.on('load', function() {
            window.setTimeout(function() {
                $body.removeClass('is-loading');
            }, 100);
        });

        // Mobile?
        if (skel.vars.mobile)
            $body.addClass('is-mobile');
        else
            skel
                .on('-medium !medium', function() {
                    $body.removeClass('is-mobile');
                })
                .on('+medium', function() {
                    $body.addClass('is-mobile');
                });

        // Scrolly.
        $('.scrolly')
            .scrolly({
                speed: 1500
            });

        $navbar.find('.menu-collapser').click(function () {
            $('.menu').stop().slideToggle();
        });

        $window.scroll(function () {
            var top = $window.scrollTop();

            if (top >= 20) {
                $navbar.addClass('active');
            } else {
                $navbar.removeClass('active');
            }
        });

        $body.on('click', '.accordion-header', function () {
            var $accordion = $(this).closest('.accordion'),
                $selectedElementBody = $(this).closest('.accordion-item').find('.accordion-body'),
                isAlreadyVisible = $selectedElementBody.is(':visible');

            $accordion.find('.accordion-body').slideUp();
            if (! isAlreadyVisible) {
                $selectedElementBody.slideDown();
            }
        });
    });

    async function getLatestRelease() {
        const { assets } = await fetch('https://api.github.com/repos/shlinkio/shlink/releases/latest').then(r => r.json());
        const [{ browser_download_url }] = assets;

        $('.download-shlink-btn').attr('href', browser_download_url);
    }

})(jQuery);
