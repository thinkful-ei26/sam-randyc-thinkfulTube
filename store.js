'use strict';

const store = {
  videos: [
    {
      
    }
  ]
};


// TASK: Add the Youtube Search API Base URL here:
// Documentation is here: https://developers.google.com/youtube/v3/docs/search/list#usage
const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_KEY = "Hey Sam I removed the key for security reasons";


//GET VIDEOS
const fetchVideos = function(searchTerm, callback) {
  const query ={
    q: searchTerm,
    key: API_KEY,
    part: 'snippet',
  };

  $.getJSON(BASE_URL, query, callback);
};


//FILTERS DATA
const decorateResponse = function(response) {
  return response.items.map(banana => {
    return {
      id: banana.id.videoId,
      title: banana.snippet.title,
      thumbnail: banana.snippet.thumbnails.medium.url,
      altText: banana.snippet.description,
    };
  });
 
};



