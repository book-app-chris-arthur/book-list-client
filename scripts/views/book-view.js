'use strict';

var app = app || {};

(function(module) {
  const bookView = {};

  bookView.initIndexPage = function(books) {
    console.log(books);
    $('.page').hide();
    books.forEach(book => {
      $('#book-info-list').append(`<li data-id="${book.book_id}">"${book.title}," by ${book.author}</li>`);
      $('#book-info-list').append(`<img src="${book.image_url}">`);
    });
    $('#book-info').show();

    $('#book-info-list').on('click', 'li', (event) => {
      var $book_id = $(event.target).data('id');
      console.log('book_id = ', $book_id);
      page('/books/' + $book_id);
    });
  };

  bookView.initDetailView = function(book) {
    console.log(book);
    $('.page').hide();
    $('#detail-view').append(`<img src="${book.image_url}">`);
    $('#detail-view').append(`<p>${book.title}</p>`);
    $('#detail-view').append(`<p>${book.author}</p>`);
    $('#detail-view').show();
  };

  bookView.initCreateView = function() {
    $('.page').hide();
    $('#create-view').show();
  };

  module.bookView = bookView;
})(app);