$(document).ready(function() {
        
    
    $('#pobierz-dane').click(function() {
        // console.log('działa');

        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function(data) {
            
            let daneProgramisty = JSON.stringify(data);
            $('#dane-programisty').text(daneProgramisty);

        });
    
    });


});