


$(document).ready(function(){
    $(".skill-wrapper").hover(function(){
        var score = $(this).attr("score");
        var dashOffset = 440 - (score*440)/100;
        $(this).find(".circle").animate({'stroke-dashoffset': 440 }, "fast", function(){
            $(this).animate({'stroke-dashoffset': dashOffset});
        });
        
        
    }, function(){
        
    })
});



