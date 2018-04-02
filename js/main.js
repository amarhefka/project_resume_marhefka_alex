$(document).ready(function () {
    // use jQuery.scrolling plugin to reveal articles as the user scrolls through the page
    $('article').scrolling({ offsetTop: -100 });
    $('article').first().siblings().animate({opacity: 0}, 0);
    $('article').on('scrollin', function () {
        $(this).animate({opacity: 1}, 600);
    });

    $(function () {
        $('a.zoom').fullsizable();
    });
});
