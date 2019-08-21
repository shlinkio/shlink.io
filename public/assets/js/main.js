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

        $body.on('click', '.menu-collapser', function () {
            var menuSelector = $(this).data('menu');
            $(menuSelector).stop().slideToggle();
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

        var prompt = '{<span class="yellow">15:32</span>} <span class="black">~$</span> ';
        new TypeIt('#cli-example', {
            waitUntilVisible: true,
            deleteSpeed: 0,
            loop: true,
            loopDelay: 2000
        })
          .options({ speed: 1 })
          .type(prompt)
          .options({ speed: 150 })
          .type('shlink short-url:generate https://shlink.io')
          .pause(300)
          .options({ speed: 1 })
          .break()
          .type('Processed URL: <span class="green">https://shlink.io</span>')
          .break()
          .type('Generated URL: <span class="green">https://doma.in/rY9k</span>')
          .pause(200)
          .break()
          .type(prompt)
          .options({ speed: 150 })
          .type('shlink short-url:parse rY9k')
          .pause(200)
          .options({ speed: 1 })
          .break()
          .type('Long URL: <span class="green">https://shlink.io</span>')
          .pause(200)
          .break()
          .type(prompt)
          .options({ speed: 150 })
          .type('shlink short-url:visits rY9k')
          .pause(200)
          .options({ speed: 1 })
          .break()
          .type('+---------+------+------------+---------+')
          .break()
          .type('| <span class="green">Referer</span> | <span class="green">Date</span> | <span class="green">User agent</span> | <span class="green">Country</span> |')
          .break()
          .type('+---------+------+------------+---------+')
          .go();
    });

    function getLatestRelease() {
        fetch('https://api.github.com/repos/shlinkio/shlink/releases/latest')
          .then(function (r) { return r.json() })
          .then(function (latestRelease) {
              var url = latestRelease.assets[0].browser_download_url;
              $('.download-shlink-btn').attr('href', url);
          });
    }

})(jQuery);
