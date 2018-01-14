'use strict';

var app = app || {};

(function(module) {
  const adminView = {};
  const pass = 'admin';

  adminView.initAdminView = function() {
    // disable access to update/delete buttons unless password is verified
    $('.page').hide();
    $('#admin-view, #icon-menu').show();
  };

  adminView.verify = function() {
    $('#login-form').on('submit', event => {
      event.preventDefault();
      if($('#passphrase').val() === pass) {
        console.log('admin entered correctly: ', pass);
        page('/');
        flag = true;
      }
      else {console.log('Incorrect password...');}
    });
  };

  module.adminView = adminView;
})(app);