function firstLoad() {
    $("#menu").toggle();
    changeSquareColor();
}


const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}
function hideMenu() {
    $("#menu").toggle(0);
    if ($('#menu').css("display") == 'none') {
        $('#pullArrow').css('transform', 'rotate(0deg)')
    }
    else {
        $('#pullArrow').css('transform', 'rotate(180deg)')
    }
}