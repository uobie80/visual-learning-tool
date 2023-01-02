var searchFormEl = document.querySelector('#search-form');
//This function handles the search form
function handleSearchFormSubmit(event) {
    event.preventDefault();
  
    var inputVal = document.querySelector("#search-input").value;
  
    if (!inputVal) {
      document.querySelector("#message").textContent =
        "Please Enter a word!";
      return;
    }
    var searchInputVal = './search-results.html?q=' + inputVal;

    location.assign(searchInputVal);
  }
  
  searchFormEl.addEventListener("submit", handleSearchFormSubmit);