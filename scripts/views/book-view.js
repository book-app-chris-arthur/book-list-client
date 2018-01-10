'use strict';

var app = app || {};

(function(module) {
  const bookView = {};

  bookView.initIndexPage = function(books) {
    console.log(books);
    books.forEach(book => {
      $('#book-info-list').append(`<li>${book.title}</li>`);
    });
    $('#book-info').show();
  };

  bookView.initDetailView = function() {
    $('#detail-view').append();
  };
  module.bookView = bookView;
})(app);