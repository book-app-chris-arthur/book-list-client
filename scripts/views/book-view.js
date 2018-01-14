'use strict';

var app = app || {};
var flag = false;

(function(module) {
  const bookView = {};

  bookView.initIndexPage = function(books) {
    console.log(books);
    $('.page').hide();
    $('#nav-list').addClass('hide');
    $('#book-info-list').empty();
    $('#icon-menu').show();
    books.forEach(book => {
      $('#book-info-list').append(`<li data-id="${book.book_id}">"${book.title}"</li>`);
      $('#book-info-list').append(`<li id="author">${book.author}</li>`);
      $('#book-info-list').append(`<li id="isbn">${book.isbn}</li>`);
      $('#book-info-list').append(`<img src="${book.image_url}"></br>`);
      // $('#book-info-list').append(`<p id="description">${book.description}</p>`);
      $('#book-info-list').append(`<button type="button" data-id="${book.book_id}" id="update-btn">Update Record</button>`);
      $('#book-info-list').append(`<button type="button" data-id="${book.book_id}" id="delete-btn">Delete Record</button>`);
      $('#book-info-list').append('<div id="border"></div>');
    });
    $('#book-info').show();

    if(!flag) {
      $('#update-btn, #delete-btn').addClass('hide');
    } else {$('#update-btn, #delete-btn').show();}

    $('#book-info-list').on('click', 'li', (event) => {
      var $book_id = $(event.target).data('id');
      page('/books/' + $book_id);
    });

    $('#update-btn').on('click', (event) => {
      console.log('update button clicked');
      page(`/books/${$(event.target).data('id')}/update`);
    });

    $('#delete-btn').on('click', (event) => {
      console.log('Book record deleted!');
      app.Book.destroy($(event.target).data('id'));
    });
  };

  $('#nav-home').on('click', () => {
    page('/');
  });

  $('#nav-create').on('click', () => {
    page('/books/create');
  });

  $('#admin-link').on('click', () => {
    page('/admin');
  });

  $('#icon-menu').on('click', () => {
    if($('#nav-list').hasClass('hide')) {
      $('#nav-list').removeClass('hide');
    }
    else {$('#nav-list').addClass('hide');}
  });

  bookView.initDetailView = function(book) {
    $('.page').hide();
    $('#detail-view').empty();
    $('#detail-view').append(`<img src="${book.image_url}">`);
    $('#detail-view').append(`<h2>"${book.title}"</h2>`);
    $('#detail-view').append(`<p>${book.author}</p>`);
    $('#detail-view').append(`<p>${book.description}</p>`);
    $('#detail-view').append(`<button type="button" data-id="${book.book_id}" id="update-btn">Update Record</button>`);
    $('#detail-view').append(`<button type="button" data-id="${book.book_id}" id="delete-btn">Delete Record</button>`);
    $('#detail-view, #icon-menu').show();

    $('#update-btn, #delete-btn').hide();
  };

  bookView.initCreateView = function() {
    $('.page').hide();
    $('.input').empty();
    $('#create-view, #icon-menu').show();
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

  bookView.initUpdateView = function(book) {
    console.log(book);
    $('.page').hide();
    $('#detail-view, #icon-menu').show();
    $('#update-view').show();
    $('#update-title').val(book.title);
    $('#update-author').val(book.author);
    $('#update-isbn').val(book.isbn);
    $('#update-image_url').val(book.image_url);
    $('#update-description').val(book.description);
    $('#update-book-form').on('submit', event => {
      event.preventDefault();
      var updateInfo = $(this).serializeArray();
      app.Book.update(book.book_id, updateInfo);
    });
  };

  module.bookView = bookView;
})(app);