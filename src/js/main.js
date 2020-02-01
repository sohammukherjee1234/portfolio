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
});

$(document).ready(function () {
    $("#call-btn").click(function(){
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val("+917872636902").select();
        document.execCommand("copy");
        $temp.remove();
    });
  });


