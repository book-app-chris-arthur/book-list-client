'use strict';

var app = app || {};

(function(module) {
  // const app_url = 'http://localhost:3000/api/v1/books';
  const app_url = 'https://cl-aa-booklist.herokuapp.com/api/v1/books';

  function Book() {

  }

  Book.all = [];

  Book.fetchAll = () => {
    return $.getJSON(app_url).catch(err => console.error(err));
  };

  Book.fetchOne = (id) => {
    return $.getJSON(`${app_url}/${id}`).catch(err => console.error(err));
  };

  Book.create = (book) => {
    $.post(app_url, book).catch(err => console.error(err));
  };

  Book.destroy = (id) => {
    $.ajax({
      url: `${app_url}/${id}`,
      method: 'DELETE',
      dataType: 'json'
    })
      .then(() => {console.log('Delete successful.');});
  };

  Book.update = (id, book) => {
    $.ajax({
      url: `${app_url}/${id}`,
      method: 'PUT',
      dataType: 'json',
      data: JSON.stringify(book)
    })
      .then((updateData) => {console.log(updateData);});
  };

  module.Book = Book;
})(app);