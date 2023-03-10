
$(".form").submit(function (e) {
  
    
  const nameValue = $("#name").val();
  const statusValue = $("#status").val();
  const textareaValue = $("#textarea").val();

  console.log(nameValue, statusValue, textareaValue);
  if (statusValue === "toApply") {

    const alltoApplyDivs = document.querySelectorAll(".toApply div");

    

    $('#toApply').append("<div>");
    $('#toApply div:last').addClass("toApplyClass");
    $('#toApply div:last').append("<h3>" + nameValue);
    $('#toApply div:last').append("<p>" + textareaValue);

  } else {
    // $(".applied").append("<h3>" + nameValue);
    // $(".applied").append("<p>" + textareaValue);
    $('#applied').append("<div>");
    $('#applied div:last').addClass("appliedClass");
    $('#applied div:last').append("<h3>" + nameValue);
    $('#applied div:last').append("<p>" + textareaValue);
  }
  e.preventDefault()
});
