'use strict';

var app = app || {};

(function(module) {
  const bookView = {};

  bookView.initIndexPage = function(books) {
    console.log(books);
    $('.page').hide();
    $('#nav-list').hide();
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

  $('#icon-menu').on('click', () => {
    $('#nav-list').toggle();
  });

  bookView.initDetailView = function(book) {
    console.log(book);
    $('.page').hide();
    $('#detail-view').empty();
    $('#detail-view').append(`<img src="${book.image_url}">`);
    $('#detail-view').append(`<p>${book.title}</p>`);
    $('#detail-view').append(`<p>${book.author}</p>`);
    $('#detail-view').append(`<button type="button" data-id="${book.book_id}" id="update-btn">Update Record</button>`);
    $('#detail-view').append(`<button type="button" data-id="${book.book_id}" id="delete-btn">Delete Record</button>`);
    $('#detail-view').show();

    $('#update-btn').on('click', () => {
      page('/books/:id/update');
    });
    $('#delete-btn').on('click', () => {});
  };

  bookView.initCreateView = function() {
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

  bookView.initUpdateView = function(ctx) {
    $('.page').hide();
    $('.input').empty();
    $('#update-view').show();
    $('#update-title').val(ctx.title);
    $('#update-author').val(ctx.author);
    $('#update-isbn').val(ctx.isbn);
    $('#update-image_url').val(ctx.image_url);
    $('#update-description').val(ctx.description);
    $('#update-book-form').on('submit', event => {
      event.preventDefault();
      var updateInfo = $(this).serializeArray();
      app.Book.update(ctx.book_id, updateInfo);
    });
  };

  bookView.initDeleteView = function() {};

  module.bookView = bookView;
})(app);