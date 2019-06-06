$(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);

  $("form").submit(function(event) {
    event.preventDefault();
    $(".justin, .brad, .katy").hide();
    var inputName = $("input.name").val();
    var inputAge = $("input.age").val();
    var inputColor = $(".color").val();
    var age = parseInt($("input.age").val());
    // alert("age=" + age + "color=" + inputColor);
    if (age < 21 && inputColor === "red") {
      $(".justin").show();
    } else if (age >= 21 && inputColor === "blue") {
      $(".brad").show();
    } else if (age >= 45 && inputColor === "green") {
      $(".katy").show();
    } else {
      $(".katy, .brad").show();
    }
  });
});
