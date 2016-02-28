$(document).ready(function(){
 
    $('.navitems li a').click(function(event){
        console.log("Currently in earthquake.js");
        
        var url = $(this).attr('href');
        console.log("Type: " + $(this).attr('type'));
        switch($(this).attr('type'))
            {
                case('application/mp4'):
                    event.preventDefault();
                    console.log('You are a video...');
                    $('#content').html('<video src="' + url + '" controls></video>');
                    break;
                case('image/jpeg'):
                    event.preventDefault();
                    console.log('You are an image...');
                    $('#content').html('<img src="' + url + '" width="85%">')
                    break;
                default:
                    break;
            }
    });
});

