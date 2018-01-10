'use strict';

page('/', () => {
  $('.page').hide();
  app.Book.fetchAll().then(books => {
    app.bookView.initIndexPage(books);
  });
});

page('/books/:id', () => {
  $('.page').hide();
  app.Book.fetchOne().then(books => {
    app.bookView.initDetailView(books);
  });
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