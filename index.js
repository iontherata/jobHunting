class Job {
  constructor(name, status, description) {
    this.name = name;
    this.status = status;
    this.description = description;
  }
}

class UI {
  addJobToList(job) {
    if (job.status === "toApply") {
      const toApplyElement = $("<div>")
        .addClass("toApplyClass")
        .append("<h3>" + job.name)
        .append("<p>" + job.description)
        .append("<button>Applied")
        .append("<button>Delete");

     

      $("#toApply div:first").before(toApplyElement);
    } else {
      const appliedElement = $("<div>")
        .addClass("appliedClass")
        .append("<h3>" + job.name)
        .append("<p>" + job.description)
        .append("<button>Delete");
      $("#applied div:first").before(appliedElement);
    }
  }
  deleteJob(target) {
   
  }

}

$(".form").submit(function (e) {
  const name = $("#name").val();
  const status = $("#status").val();
  const description = $("#textarea").val();

  const job = new Job(name, status, description);

  const ui = new UI();
  ui.addJobToList(job);

  // const toApplyElement = $("<div>")
  //   .addClass("toApplyClass")
  //   .append("<h3>" + nameValue)
  //   .append("<p>" + textareaValue);

  // const appliedElement = $("<div>")
  //   .addClass("appliedClass")
  //   .append("<h3>" + nameValue)
  //   .append("<p>" + textareaValue);

  // if (statusValue === "toApply") {
  //   const alltoApplyDivs = document.querySelectorAll(".toApply div");

  //   $("#toApply div:first").before(toApplyElement);
  // } else {
  //   $("#applied div:first").before(appliedElement);
  // }
  e.preventDefault();
});


$('.forDeleting').click(function(e){
  if(e.target.innerText === "Delete") {
    e.target.parentElement.remove()
  }
  e.preventDefault();
})