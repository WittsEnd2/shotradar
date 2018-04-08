var active = false;
$('.emergencyTab').click(function(){
    if (active === false) {
        $('.contentTab').css('display','block');
        $('.emergencyTab').css("background-color", "red");
        active = true;
    } else {
        $('.contentTab').css('display', 'none');
        $('.emergencyTab').css("background-color", "darkred");
        active = false;
    }
});

$('.footer').click(function(){
    window.location.replace('tips.html');
})
