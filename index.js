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
}

class Store {
  static getJobs() {
    let jobs;

    if (localStorage.getItem("jobs") === null) {
      jobs = [];
    } else {
      jobs = JSON.parse(localStorage.getItem("jobs"));
    }
    return jobs;
  }

  static displayJobs() {
    const jobs = Store.getJobs();

    jobs.forEach(function (job) {
      const ui = new UI();
      ui.addJobToList(job);
    });
  }

  static addJob(job) {
    const jobs = Store.getJobs();
    jobs.push(job);
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }

  // static changeStatus(job){
  //   const jobs = Store.getJobs();
  //     for(job of jobs){}
  // }

  static removeJob(target) {
    const jobs = Store.getJobs();

    jobs.forEach(function (job, index) {
      if (job.name === target) {
        jobs.splice(index, 1);
      }
    });
    localStorage.setItem("jobs", JSON.stringify(jobs));
  }
}

document.addEventListener("DOMContentLoaded", Store.displayJobs);

$(".form").submit(function (e) {
  const name = $("#name").val();
  const status = $("#status").val();
  const description = $("#textarea").val();

  const job = new Job(name, status, description);

  const ui = new UI();

  ui.addJobToList(job);

  Store.addJob(job);

  e.preventDefault();
});

$(".forDeleting").click(function (e) {
  if (e.target.innerText === "Delete") {
    e.target.parentElement.remove();
    Store.removeJob(e.target.parentElement.firstChild.innerText);
  }

  e.preventDefault();
});

$(".forDeleting").click(function (e) {
  if (e.target.innerText === "Applied") {
    $(e.target.parentElement).removeClass("toApplyClass");
    console.log(e.target.parentElement.firstChild.innerText);

    $("#applied div:first").before(e.target.parentElement);
    $(e.target.parentElement).addClass("appliedClass");
    e.target.remove();

    // e.target.parentElement.remove();
  }
  e.preventDefault();
});


