var APIKey = "22vwvUYuN4pRHPAeG9YOHXN8r48eEaWa";
var giphyAPIKey = "04MTGqYDpxd8HuhMqVSJBUSZxRc5dOUp"; //Giphy API key


// const settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://wordsapiv1.p.rapidapi.com/words/%7Bword%7D",
//     "url": "https://wordsapiv1.p.rapidapi.com/words/%7Bword%7D/definitions",
//     "url": "https://wordsapiv1.p.rapidapi.com/words/%7Bword%7D/antonyms",
//     "url": "https://wordsapiv1.p.rapidapi.com/words/%7Bword%7D/synonyms",
//     "method": "GET",
// 	"headers": {
// 		"X-RapidAPI-Key": "b9edf3508bmsh866b047a7c975fcp113037jsnb3ff5029ee75",
// 		"X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com"
// 	}
// };

/*
$.ajax(settings).done(function (response) {
	console.log(response);
});
*/

/*
object.onclick = function(){
    getData  
}
*/

var searchFormEl = document.querySelector("#search-form");


search = function (w) {

  var gifs = getGiphys(w);
  var definition = getWordDefinition(w);
  var synonyms = getWordSynonym(w);
  var antonyms = getWordAntonym(w);

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

getGiphys = function (searchWord) {
 
  /* 
    This function uses the Giphy API to fetch gifs related to search term
  */

  window.event.preventDefault();

  var requestUrl = "https://api.giphy.com/v1/gifs/search?api_key=" + giphyAPIKey + "&q=" + searchWord + "&limit=1&offset=0&rating=g&lang=en"
  var gifs = null;
  
  fetch(requestUrl)
  .then(function (response){
    if (response.status !== 200) {
      document.getElementById('message').textContent = 'unable to find the word!';
    }
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    gifs = data.url;
  })
  .catch(function (error) {
    document.getElementById('message').textContent = 'unable to find the word!';
  })

   return gifs;
}
// This function gets the definition
var getWordDefinition = function(searchWord) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': "b9edf3508bmsh866b047a7c975fcp113037jsnb3ff5029ee75",
      'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
    }
  };
  
  fetch('https://wordsapiv1.p.rapidapi.com/words/' + searchWord + '/definitions', options)
    .then(function (response) {
      if (response.status !== 200) {
        document.getElementById('message').textContent = 'unable to find the word!';
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      document.getElementById('message').textContent = 'unable to find the word!';
    });
} 
//This function gets the synonyms
var getWordSynonym = function(searchWord) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': "b9edf3508bmsh866b047a7c975fcp113037jsnb3ff5029ee75",
      'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
    }
  };
  
  fetch('https://wordsapiv1.p.rapidapi.com/words/' + searchWord + '/synonyms', options)
    .then(function (response) {
      if (response.status !== 200) {
        document.getElementById('message').textContent = 'unable to find the word!';
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      document.getElementById('message').textContent = 'unable to find the word!';
    });
} 
//This function fetches the antonyms
var getWordAntonym = function(searchWord) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': "b9edf3508bmsh866b047a7c975fcp113037jsnb3ff5029ee75",
      'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
    }
  };
  
  fetch('https://wordsapiv1.p.rapidapi.com/words/' + searchWord + '/antonyms', options)
    .then(function (response) {
      if (response.status !== 200) {
        document.getElementById('message').textContent = 'unable to find the word!';
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (error) {
      document.getElementById('message').textContent = 'unable to find the word!';
    });
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


