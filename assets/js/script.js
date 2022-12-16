var searchFormEl = document.querySelector("#search-form");

//This function prints results on the html page
function printResults(resultObj) {
  //setting up divs to hold the results content
  var row = document.querySelector(".row");

  var resultBody = document.createElement("div");
  resultBody.classList.add(
    "card-body",
    "bg-light",
    "text-dark",
    "col",
    "s12",
    "m12",
    "l8"
  );
  row.append(resultBody);

  var titleEl = document.createElement("h3");
  titleEl.textContent = resultObj.title;

}

//This function handles the search form
function handleSearchFormSubmit(event) {
  event.preventDefault();

  var searchInputVal = document.querySelector("#search-input").value;

  if (!searchInputVal) {
    document.querySelector("#message").textContent =
      "You need a search input value!";
    return;
  }
  search(searchInputVal);
}

searchFormEl.addEventListener("submit", handleSearchFormSubmit);
