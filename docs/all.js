$(document).ready(function(){$(".contact-btn").click(function(){var t=$(this).attr("isOpen");console.log(t),"0"===t?($(this).attr({isOpen:"1"}),$("#arrow").text("<")):($(this).attr({isOpen:"0"}),$("#arrow").text(">")),$("#contact-data").toggle("slow")})}),$(document).ready(function(){$("#call-btn").click(function(){var t=$("<input>");$("body").append(t),t.val("+917872636902").select(),document.execCommand("copy"),t.remove()})}),$(document).ready(function(){$(".skill-wrapper").hover(function(){var t=440-440*$(this).attr("score")/100;$(this).find(".circle").animate({"stroke-dashoffset":440},"fast",function(){$(this).animate({"stroke-dashoffset":t})})},function(){})});