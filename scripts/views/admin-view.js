'use strict';

var app = app || {};

(function(module) {
  const adminView = {};
  const pass = 'admin';

  adminView.initAdminView = function() {
    $('.page').hide();
    $('#admin-view, #icon-menu').show();
  };

  adminView.verify = function() {
    $('#login-form').on('submit', event => {
      event.preventDefault();
      if($('#passphrase').val() === pass) {
        console.log('admin entered correctly: ', pass);
        page('/');
        flag = true; // this serves to show update/delete buttons if password verified
      }
      else {console.log('Incorrect password...');}
    });
  };

  module.adminView = adminView;
})(app);