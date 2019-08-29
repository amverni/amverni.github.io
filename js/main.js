var originalPaddingHeight;
var originalHomeColorOpacity = 0.7; /* Must match value in style.css #home */

$(document).ready(function()
{
    originalPaddingHeight = parseFloat($('#header').css('padding-bottom'));
    set_scrollspy_offset();
    fade_in_elements(['.fade-in-1', '.fade-in-2']);

    set_scrollspy_offset();
    $('#navbar-btn').click(set_scrollspy_offset);
    $('.scroll').click(function(event) { scroll_to_link(event, $($(this).attr('href')).offset().top); });

    originalPaddingHeight = parseFloat($('#header').css('padding-bottom'));
    window.onscroll = scroll_header;

    position_footer();
    window.onresize = position_footer;
});

/* Fade in different elements on the page */
function fade_in_elements(elements)
{
    $(this).scrollTop(0);
    if( elements.length )
    {
        $(elements[0]).animate({opacity: 1}, 500, function() {
            fade_in_elements(elements.splice(1))
        });
    }

    scroll_header();
}

/* Shrink or Grow header and fade background image based on location on page */
function scroll_header()
{
    var scrollAmount = window.pageYOffset;
    var homeHeight = $('#header').outerHeight();
    if( originalPaddingHeight >= scrollAmount )
    {
        /* Shrink header */
        $('#header').css('padding-bottom', originalPaddingHeight - scrollAmount);

        /* Fade out header background image */
        var proportionScrolled = scrollAmount / originalPaddingHeight;
        var opacity = originalHomeColorOpacity + (1 - originalHomeColorOpacity) * proportionScrolled;
        $('#header').css('background', 'linear-gradient(to right, rgba(107, 77, 168, ' + String(opacity) + '),\
                          rgba(17, 138, 188, ' + String(opacity) + ')), url(img/higgins.jpg) no-repeat center bottom')
        $('#header').css('background-size', 'cover');
    }
}

/* Scroll to a link on the page */
function scroll_to_link(event, scrollLocation)
{
    event.preventDefault();
    if( scrollLocation > 0 )
    {
        /* Shift down for navbar */
        scrollLocation -= $(".navbar").height();

        /* Shift down for shrinking header */
        scrollLocation -= parseFloat($('#header').css('padding-bottom'));

        /* round up */
        scrollLocation += 0.5;
    }
    $('html, body').animate({ scrollTop: scrollLocation }, 500);
}

function position_footer()
{
    $('footer').removeClass('short-page-footer');
    if( $('footer').position().top + $('footer').outerHeight() < window.innerHeight )
    {
        $('footer').addClass('short-page-footer');
    }
}
