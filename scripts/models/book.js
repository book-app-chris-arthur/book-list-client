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

const app = app || {};

(function(module) {
  const app_url = 'http://localhost:3000/api/v1/books';
  //const app_url = 'https://cl-aa-booklist.herokuapp.com/api/v1/books';

  const Book = {};
  Book.all = [];

  Book.fetchOne = function(id) {
    return $.getJSON(`${app_url}/:${id}`).catch(err => console.error(err));
  };

  Book.create = function(book) {
    $.post(app_url, book);
  };

  module.Book = Book;
})(app);