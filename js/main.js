const filter_btns = document.querySelectorAll(".filter-btn");

// for each btn inside the node list we add an event listner of click
// then specify a function to run when the button is clicked
// so an array function is specified with zero parameter which remove the active class from all button
// and finally catch the button which is clicked and add the active class to that
filter_btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    filter_btns.forEach((button) => button.classList.remove("active"));
    btn.classList.add("active");

    // this fletch the filter value of clicked btn
    let filterValue = btn.dataset.filter;

    // pass the filtervalue to the isotope object method
    $(".grid").isotope({ filter: filterValue });
  })
);

// isotope library is added for the
// isotope library code
$(".grid").isotope({
  // options
  itemSelector: ".grid-item",
  layoutMode: "fitRows",
  transitionDuration: "06s",
});
