$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#button-cancel').click(function() { 
        $('form').slideUp();
    });
});