import $ from 'jquery';
var originalPaddingHeight;
var originalHomeColorOpacity = 0.7; /* Must match value in style.css #home */

$(document).ready(function()
{
    originalPaddingHeight = parseFloat($('#header').css('padding-top'));

    fade_in_elements(['.fade-in-1', '.fade-in-2']);

    $('.scroll').click( function(event)
    {
        var page, element;
        [page, element] = $(this).attr('href').split("#");

        if(page === "")
        {
            event.preventDefault();
            scroll_to_link($("#" + element).offset().top);
        }
    });

    window.onscroll = scroll_header;

    position_footer();
    window.onresize = position_footer;

    /* Adjust page Y offset if necessary */
    if( window.pageYOffset > 0 && window.pageYOffset + window.innerHeight < $(document).height() )
    {
        var scrollLocation = window.pageYOffset;

        /* Shift down for navbar */
        scrollLocation -= $(".navbar").height();

        /* Shift down for shrinking header */
        scrollLocation -= parseFloat($('#header').css('padding-bottom'));

        $(this).scrollTop( scrollLocation );
    }
    scroll_header();
});

/* Fade in different elements on the page */
function fade_in_elements(elements)
{
    if( elements.length )
    {
        $(elements[0]).animate({opacity: 1}, 500, function() {
            fade_in_elements(elements.splice(1))
        });
    }
}

/* Shrink or Grow header and fade background image based on location on page */
export function scroll_header(imgPath)
{
    console.log(imgPath);
    var scrollAmount = window.pageYOffset;
    if( scrollAmount > originalPaddingHeight )
    {
        scrollAmount = originalPaddingHeight;
    }
    /* Shrink header */
    $('#header').css('padding-bottom', originalPaddingHeight - scrollAmount);

    /* Fade out header background image */
    // var proportionScrolled = scrollAmount / originalPaddingHeight;
    // var opacity = originalHomeColorOpacity + (1 - originalHomeColorOpacity) * proportionScrolled;
    // $('#header').css('background', 'linear-gradient(to right, rgba(107, 77, 168, ' + String(opacity) + '),\
    //                    rgba(17, 138, 188, ' + String(opacity) + ')), url(' + imgPath + ') no-repeat center bottom');
    $('#header').css('background-size', 'cover');
}

export function getPadding()
{
    var scrollAmount = window.pageYOffset;
    if( scrollAmount > originalPaddingHeight )
    {
        scrollAmount = originalPaddingHeight;
    }
    return originalPaddingHeight - scrollAmount;
}

export function getOpacity()
{
    var scrollAmount = window.pageYOffset;
    if( scrollAmount > originalPaddingHeight )
    {
        scrollAmount = originalPaddingHeight;
    }
    var proportionScrolled = scrollAmount / originalPaddingHeight;
    var opacity = originalHomeColorOpacity + (1 - originalHomeColorOpacity) * proportionScrolled;
    return opacity;
}

/* Scroll to a link on the page */
function scroll_to_link(scrollLocation)
{
    if( scrollLocation > 0 )
    {
        /* Shift down for navbar */
        scrollLocation -= $(".navbar").height();

        /* Shift up for shrinking header */
        scrollLocation -= parseFloat($('#header').css('padding-bottom'));
    }
    $('html, body').animate({ scrollTop: scrollLocation }, 500);
}

/* If a page is short, move footer to absolute positioning on bottom, otherwise, normal positioning */
function position_footer()
{
    $('footer').removeClass('short-page-footer');
    if( $('footer').position().top + $('footer').outerHeight() < window.innerHeight )
    {
        $('footer').addClass('short-page-footer');
    }
}

/* Popup experience image on click */
export function popup_image(img) {
    $('#image-popup-modal').css('display', 'block');
    $('#popup-image').attr('src', img.src);

    let node = document.createElement("p");
    let textNode = document.createTextNode(img.alt);
    node.append(textNode);
    $('#image-popup-caption').children("p").remove();
    $('#image-popup-caption').append(node);
}
