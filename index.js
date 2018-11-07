'use strict';
/* globals store */
 
  
const addVideosToStore = function(videos) {
  store.videos = videos;
};
 

const render = function() {
  const htmlData = store.videos.map(video => generateVideoItemHtml(video)).join('');
  $('.results').html(htmlData);//The list element

  console.log(store.video.altText);

};

//CREATES LIST ITEM
const generateVideoItemHtml = function(video) {
  return `
  <li data-video-id="${video.id}">
  <h2>${video.title}</h2>
  <a href="https://www.youtube.com/watch?v=${video.id}">
  <img src ="${video.thumbnail}" alt= "${video.altText}" href="google.com"/>
  </a>
  <h3>${video.altText}</h3>
  </li>
  `;
};

 

//USER INPUT
const handleFormSubmit = function() {

  $('.js_search_form').submit(function(event){

    event.preventDefault();
 
    //const searchItem = $('.js_query').val();
    
    const queryTarget = $(event.currentTarget).find('.js_query');

    const searchItem = queryTarget.val();
 
    $(event.currentTarget).find('.js_query').val('');

     

    const getVideos = fetchVideos(searchItem, (response) => {
      const decorated = decorateResponse(response);
      addVideosToStore(decorated);
      render();
    });
    
   

  }); 

};
 

// When DOM is ready:
$(function () {
  handleFormSubmit();
  
  // TASK:
  // 1. Run `handleFormSubmit` to bind the event listener to the DOM
});





 