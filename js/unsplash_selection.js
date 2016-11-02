"use strict";
$(document).ready(function() {

  // var $xhr = $.getJSON('https://api.unsplash.com/photos/search/?query=&client_id=5bb9ff819a44bbdcda3fcb8695bb0c2007c1ae0d85c3e3829b431b7862821926');


// var photoCollection = {}
var mountains = $('#nav-mountains');
var wildlife = $('#nav-wildlife');
var camping = $('#nav-camping');
var canoe = $('#nav-canoe');
var userInput = '';



// ==== Search input field ====

$(function() {
  $('#search_button').on('click', function() {
    searchUnsplash($('#search_criteria').val());
  });

});

// ==== Search mountain icon ====

mountains.on('click', function(){
  userInput = 'mountains';
  searchIcons();
});

// ==== Search wildlife icon ====

wildlife.on('click', function(){
  userInput = 'wildlife';
  searchIcons();
});

// ==== Search camping icon ====

camping.on('click', function(){
  userInput = 'camping';
  searchIcons();
});

// ==== Search canoe icon ====

canoe.on('click', function(){
  userInput = 'canoe';
  searchIcons();
});


// ==== Search Using Icons ====

function searchIcons() {

  var $xhr = $.getJSON('https://api.unsplash.com/photos/search/?query='+userInput+'&client_id=5bb9ff819a44bbdcda3fcb8695bb0c2007c1ae0d85c3e3829b431b7862821926');
   $('#images').empty();
  $xhr.done(function(data) {
    console.log(data);
    for (var i = 0; i < data.length; i++) {
      organizePhotoData(data[i]);
    }
  });
}

// ==== Search Using Form ====

function searchUnsplash(keyword) {

  var $xhr = $.getJSON('https://api.unsplash.com/photos/search/?query='+keyword+'&client_id=5bb9ff819a44bbdcda3fcb8695bb0c2007c1ae0d85c3e3829b431b7862821926');
   $('#images').empty();
  $xhr.done(function(data) {
    console.log(data);
    for (var i = 0; i < data.length; i++) {
      organizePhotoData(data[i]);
    }
  });
}
// col-md-4 col-xs-6 


// ==== Append photos to container  ====

function organizePhotoData(data) {
  var photoSource = data.urls.small;
  $("<img/>").attr({
    "src": photoSource,
    "class": "result portfolio-thumbs",
    "id": data.id,
    "location": data.user.location,
  // var newPhoto = $('<img src="' + photoSource + '">');
  // imgContainer.append(newPhoto);
  // console.log(newPhoto);
  }).appendTo('#images');

}

// (‘<div class=“col-lg-3 col-xs-6”>’ + ‘<span>’ + data.user.location
//  + ‘</span>’ + <img tag> ‘</div>’)


// imgContainer.children().remove();

});
