/* Set scrollspy based on height of navbar. */
function set_scrollspy_offset()
{
    if( parseFloat(getComputedStyle(document.body).getPropertyValue('--breakpoint-md')) < window.innerWidth )
    {
        $('body').attr('data-offset', 60);
    }
    else
    {
        $('body').attr('data-offset', 380);
    }
}
