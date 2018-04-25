
// add new item to the list by entering input
$("input").keypress(function(event){
  if(event.which === 13){
    var newitem = $("input").val();
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + newitem + "</li>");

    // clear the input box
    $(this).val("");
  }
});

// show/hide input box
$(".fa-plus").on("click", function(){
  $("input").slideToggle();
});

// cross out the item when clicked
$("ul").on("click", "li", function(){
  $(this).toggleClass("done");
});

// show remove button when mouse over list
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
});
