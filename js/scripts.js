$(function() {
  $("form").submit(function(event) {
  event.preventDefault();
  $(".justin, .brad, .katy").hide();
  var inputName = $("input.name").val();
  var inputAge = $("input.age").val();
  var inputColor = $(".color").val();
  var age = parseInt($("input.age").val());
  // alert("age="+age+"color="+inputColor);
  if(age<21 && inputColor==="red"){
    $(".justin").show();
  } else if (age>=21 && inputColor==="blue"){
    $(".brad").show();
  } else if(age>=45 && inputColor==="green"){
    $(".katy").show();
  } else {
    $(".katy, .brad").show();
  }
  });
});
