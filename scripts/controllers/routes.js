'use strict';

page('/', () => {
  $('.page').hide();
  app.fetchAll().then(books => {
    app.bookView.initIndexPage(books);
  });
});

page('/books/:id', () => {
  $('.page').hide();
  app.Book.fetchOne().then();
  $('#detail-view').show();
});

page('/books/create', () => {
  $('.page').hide();
  $('#form-view').show();
});

page('/error', () => {
  $('.page').hide();
  $('#error-view').show();

});

page.start();