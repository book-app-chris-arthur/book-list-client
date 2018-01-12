'use strict';

var app = app || {};

(function(module) {
  const bookView = {};

  bookView.initIndexPage = function(books) {
    console.log(books);
    $('.page').hide();
    $('#book-info-list').empty();
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

    $('#nav-home').on('click', () => {
      page('/');
    });

    $('#nav-create').on('click', () => {
      page('/books/create');
    });
  };

  bookView.initDetailView = function(book) {
    console.log(book);
    $('.page').hide();
    $('#detail-view').empty();
    $('#detail-view').append(`<img src="${book.image_url}">`);
    $('#detail-view').append(`<p>${book.title}</p>`);
    $('#detail-view').append(`<p>${book.author}</p>`);
    $('#detail-view').show();
  };

  bookView.initCreateView = function() {
    console.log('create view showing!');
    $('.page').hide();
    $('.input').empty();
    $('#create-view').show();
    $('#new-book-form').on('submit', event => {
      event.preventDefault();
      var newBook = new app.Book({
        author: $('#form-author').val(),
        title: $('#form-title').val(),
        isbn: $('#form-isbn').val(),
        image_url: $('#form-image_url').val(),
        description: $('#form-description').val()
      });

      app.Book.create(newBook);

      window.location = '../';
    });
  };

  module.bookView = bookView;
})(app);