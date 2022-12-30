var giphyAPIKey = "04MTGqYDpxd8HuhMqVSJBUSZxRc5dOUp"; //Giphy API key
var wordsAPIKey = "b9edf3508bmsh866b047a7c975fcp113037jsnb3ff5029ee75"


search = function (w) {

  var gifs = getGiphys(w);

}

getGiphys = function (searchWord) {
 
  /* 
    This function uses the Giphy API to fetch gifs related to search term
  */

  window.event.preventDefault();

  var requestUrl = "https://api.giphy.com/v1/gifs/search?api_key=" + giphyAPIKey + "&q=" + searchWord + "&limit=1&offset=0&rating=g&lang=en"
  var gifs = null;
  
  fetch(requestUrl)
  .then(function (response){
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    gifs = data;
  })

   return gifs;
}

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
      "Please Enter a word!";
    return;
  }
  search(searchInputVal);
}

searchFormEl.addEventListener("submit", handleSearchFormSubmit);
