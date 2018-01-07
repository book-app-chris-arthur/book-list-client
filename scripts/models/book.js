'use strict';

//const __API_URL__ = 'http://localhost:3000';
const __API_URL__ = 'https://cl-aa-booklist.herokuapp.com';

$.get(`${__API_URL__}/api/v1/books`).then(result => {
  console.log(result);
  result.forEach(obj => {
    $('#book-info').append(`<h3>Title: "${obj.title}"</h3>`);
    $('#book-info').append(`<h4>Author: ${obj.author}</h4>`);
  });
  $('#book-info').append(`<h3>Books Available: ${result.length}</h3>`);
});