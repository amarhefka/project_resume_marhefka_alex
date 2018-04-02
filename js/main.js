$(document).ready(function () {
    // use jQuery.scrolling plugin to reveal articles as the user scrolls through the page
    $('article').scrolling({ offsetTop: -100 });
    $('article').first().siblings().animate({opacity: 0}, 0);
    $('article').on('scrollin', function () {
        $(this).animate({opacity: 1}, 600);
    });

    // use jQuery-fullsizable plugin to allow full-screen viewing of the profile image
    $(function () {
        $('a.zoom').fullsizable();
    });

    // use custom jQuery to allow the user to collapse/expand the articles by clicking on them
    $('article').on('click', function () {
        $(this).children().first().siblings().slideToggle();
    });
});
