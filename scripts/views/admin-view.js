'use strict';

var app = app || {};

(function(module) {
  const adminView = {};
  const pass = 'guest';

  adminView.initAdminView = function() {
    // disable access to update/delete buttons unless password is verified
    $('.page').hide();
    $('#main-header').hide();
    $('#admin-view, #icon-menu').show();
  };

  adminView.verify = function() {
    if($('#passphrase').val() === pass) {
      $
    }
  };

  module.adminView = adminView;
})(app);