'use strict';

// page('/*', (ctx, next) => {
//   $('.page').hide();
//   next();
// });

page('/', () => {
  console.log('home page');
  app.Book.fetchAll().then(books => {
    app.bookView.initIndexPage(books);
  });
});

page('/books/create', () => {
  console.log('create route successful!');
  app.bookView.initCreateView();
  //app.Book.create();
});

page('/books/:id', (ctx) => {
  app.Book.fetchOne(ctx.params.id).then(book => {
    app.bookView.initDetailView(book);
  });
});

page('/error', () => {
  $('.page').hide();
  $('#error-view').show();
});

page();