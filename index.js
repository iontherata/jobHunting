
$(".form").submit(function (e) {
  const nameValue = $("#name").val();
  const statusValue = $("#status").val();
  const textareaValue = $("#textarea").val();

  const toApplyElement = $("<div>")
    .addClass("toApplyClass")
    .append("<h3>" + nameValue)
    .append("<p>" + textareaValue);

  const appliedElement = $("<div>")
    .addClass("appliedClass")
    .append("<h3>" + nameValue)
    .append("<p>" + textareaValue);

  if (statusValue === "toApply") {
    const alltoApplyDivs = document.querySelectorAll(".toApply div");

    $("#toApply div:first").before(toApplyElement);
  } else {
    $("#applied div:first").before(appliedElement);
  }
  e.preventDefault();
});
 




