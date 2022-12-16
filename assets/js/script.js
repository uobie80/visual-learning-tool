var APIKey = "22vwvUYuN4pRHPAeG9YOHXN8r48eEaWa"

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://wordsapiv1.p.rapidapi.com/words/%7Bword%7D",
    "url": "https://wordsapiv1.p.rapidapi.com/words/%7Bword%7D/definitions",
    "url": "https://wordsapiv1.p.rapidapi.com/words/%7Bword%7D/antonyms",
    "url": "https://wordsapiv1.p.rapidapi.com/words/%7Bword%7D/synonyms",
    "method": "GET",
	"headers": {
		"X-RapidAPI-Key": "b9edf3508bmsh866b047a7c975fcp113037jsnb3ff5029ee75",
		"X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});
 
object.onclick = function(){
    getData  
}