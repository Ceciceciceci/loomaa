$(document).ready(function(){
 
    $('#navitems li a').click(function(event){
        console.log("Currently in earthquake.js");
        event.preventDefault();
        var url = $(this).attr('href');
        switch($(this).attr('type'))
            {
                case('application/mp4'):
                    $('#content').html('<video src="' + url + '" controls></video>');
                    break;
                case('image/jpeg'):
                    $('#content').html('<img src="' + url + '"width="40%"')
                    break;
                default:
                    break;
            }
        $('#content').load(url);
    });
});

