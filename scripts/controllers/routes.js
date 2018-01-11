'use strict';

page('/*', (ctx, next) => {
  $('.page').hide();
  next();
});

page('/', () => {
  app.Book.fetchAll().then(books => {
    app.bookView.initIndexPage(books);
  });
});

page('/books/:id', (ctx) => {
  app.Book.fetchOne(ctx.params.id).then(book => {
    console.log(book);
    app.bookView.initDetailView(book);
  });
});

page('/books/create', () => {
  app.Book.create();
  app.bookView.initCreateView();
});

page('/error', () => {
  $('.page').hide();
  $('#error-view').show();
});

page.start();