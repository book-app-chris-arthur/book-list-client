'use strict';

const app = app || {};

(function(module){
  var errorView = {};

  errorView.initErrorPage = err => {
    $('.page').hide();
    $('.error-view').show();
    $('#error-message').empty();
    var template = Handlebars.compile($('#error-template').text());
    $('#error-message').append(template(err));
  };

  let errorCallback = error => {
    console.log(error);
    errorView.initErrorPage(error);
  };
})(app);