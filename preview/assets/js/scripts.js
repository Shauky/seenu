// This is your main script file
$(document).ready(function(){

    $('div.ui-message').addClass('highlight');

    $('p:contains(ި),h3:contains("ި")').addClass('rightlines');

    $('.ui-close').click(function(){
        $(this).parents('.highlight').hide();
    })


});