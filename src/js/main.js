$(document).ready(function(){
    $(".contact-btn").click(function(){
        var open = $(this).attr("isOpen");
        console.log(open);
        if(open === "0"){
            $(this).attr({"isOpen": "1"});
            $("#arrow").text("<");
        }
        else{
            $(this).attr({"isOpen": "0"});
            $("#arrow").text(">");
        }
        $("#contact-data").toggle("slow");
    });
})