'use strict';

//?part=snippet&

//maxResults=25&

//q=surfing

const youTubeSearchUrl = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromApi (searchTerm, proccessDataCallback){
 
  const query = {

    q: `${searchTerm} in: name`,
    per_page: 5,
    key: 'AIzaSyAIf_3PceEbdUYn0ttqaPgw4F4akom9uDo'
 
  }

  $.getJSON(youTubeSearchUrl, query, proccessDataCallback);
 
}




