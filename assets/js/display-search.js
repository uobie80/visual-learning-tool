var APIKey = "22vwvUYuN4pRHPAeG9YOHXN8r48eEaWa";
var giphyAPIKey = "04MTGqYDpxd8HuhMqVSJBUSZxRc5dOUp"; //Giphy API key

var searchFormEl = document.querySelector("#search-form");

function getParams() {
  var results = document.getElementById('results');
  results.classList.remove('hide');
  // Get the search params out of the URL (i.e. `?q=london&format=photo`) and convert it to an array (i.e. ['?q=london', 'format=photo'])
  var searchParamsArr = document.location.search.split('&');

  var query = searchParamsArr[0].split('=').pop();

  getWordAntonym(query);
  getWordDefinition(query);
  getWordSynonym(query);
  getGiphys(query);
}

var getGiphys = function (searchWord) {
 
  /* 
    This function uses the Giphy API to fetch gifs related to search term
  */

  var requestUrl = "https://api.giphy.com/v1/gifs/search?api_key=" + giphyAPIKey + "&q=" + searchWord + "&limit=1&offset=0&rating=g&lang=en"
  
  
  fetch(requestUrl, {
    credential: 'same-origin',
  })
  .then(function (response){
    if (response.status !== 200) {
      document.getElementById('message').textContent = 'unable to find the word!';
    }
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    var gifs = data.data[0].images.downsized.url;
    var title = data.data[0].title;

    var gifImage = document.getElementById('gifs');
   /*  var wordDisplay = document.getElementById('word'); */
    gifImage.setAttribute('src', gifs);
    gifImage.setAttribute('alt', title);
    /* wordDisplay.textContent = title; */
  })
  .catch(function (error) {
    document.getElementById('message').textContent = 'unable to find the word!';
  })
}
// This function gets the definition
var getWordDefinition = function(searchWord) {
  var searchWordDefinitionEl1 = document.querySelector('#search-word-definition');

  searchWordDefinitionEl1.textContent = "Definitions of " + searchWord;

  const options = {
    method: 'GET',
    credential: 'same-origin',
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
      var wordTitle = data.word;
      var wordDefinition = data.definitions;
      var wordDisplay = document.getElementById('word');
      var definitionDis = document.getElementById('list');
      definitionDis.innerHTML='';
      wordDisplay.innerHTML = '';
      wordDisplay.textContent = wordTitle;
      

      for (var x=0; x<wordDefinition.length; x++) {
        var listDefine = document.createElement('li');
        definitionDis.append(listDefine);
        listDefine.innerHTML = wordDefinition[x].definition;
      }
    })
    .catch(function (error) {
      document.getElementById('message').textContent = 'unable to find the word!';
    });
} 
//This function gets the synonyms
var getWordSynonym = function(searchWord) {

  var searchWordSynonymEl1 = document.querySelector('#search-word-synonym');

  searchWordSynonymEl1.textContent = "Synonyms";

  const options = {
    method: 'GET',
    credential: 'same-origin',
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
      var synonymData = data.synonyms;
      var displaySynonyms = document.getElementById('synonyms');
      displaySynonyms.innerHTML='';

      for (var x=0; x<synonymData.length; x++) {
        var listSynonym = document.createElement('li');
        displaySynonyms.append(listSynonym);
        listSynonym.innerHTML = synonymData[x];
      }

    })
    .catch(function (error) {
      document.getElementById('message').textContent = 'unable to find the word!';
    });
} 
//This function fetches the antonyms
var getWordAntonym = function(searchWord) {

  var searchWordAntonymEl1 = document.querySelector('#search-word-antonym');

  searchWordAntonymEl1.textContent = "Antonyms";

  const options = {
    method: 'GET',
    credential: 'same-origin',
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
      var antonymData = data.antonyms;
      var displayAntonyms = document.getElementById('antonyms');
      displayAntonyms.innerHTML='';

      for (var x=0; x<antonymData.length; x++) {
        var listAntonym = document.createElement('li');
        displayAntonyms.append(listAntonym);
        listAntonym.innerHTML = antonymData[x];
      }
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
  var results = document.getElementById('results');
  results.classList.remove('hide');
  getWordAntonym(searchInputVal);
  getWordDefinition(searchInputVal);
  getWordSynonym(searchInputVal);
  getGiphys(searchInputVal);
}

searchFormEl.addEventListener("submit", handleSearchFormSubmit);

getParams();