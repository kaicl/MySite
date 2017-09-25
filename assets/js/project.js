

$("#t1").on("click", function(){
  $("#c1").slideToggle();
});

$("#t2").on("click", function(){
  $("#c2").slideToggle();
});

$("#t3").on("click", function(){
  $("#c3").slideToggle();
});

$(".projcontent").on("mouseleave", function(){
  $(this).css("color","#bababa");
});

$(".projcontent").on("mouseenter", function(){
  $(this).css("color","rgb(119, 119, 119)");
});
