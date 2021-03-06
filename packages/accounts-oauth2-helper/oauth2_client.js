(function () {
  // Open a popup window pointing to a OAuth handshake page
  //
  // @param state {String} The OAuth state generated by the client
  // @param url {String} url to page
  Meteor.accounts.oauth2.initiateLogin = function(state, url) {
    // XXX these dimensions worked well for facebook and google, but
    // it's sort of weird to have these here. Maybe an optional
    // argument instead?
    var popup = openCenteredPopup(url, 650, 331);

    var checkPopupOpen = setInterval(function() {
      if (popup.closed) {
        clearInterval(checkPopupOpen);
        tryLoginAfterPopupClosed(state);
      }
    }, 100);
  };

  // Send an OAuth login method to the server. If the user authorized
  // access in the popup this should log the user in, otherwise
  // nothing should happen.
  var tryLoginAfterPopupClosed = function(state) {
    Meteor.apply('login', [
      {oauth: {version: 2, state: state}}
    ], {wait: true}, function(error, result) {
      // XXX this is the wrong thing to do with the error! It should be
      // delivered to the user via a callback.
      if (error)
        throw error;

      if (!result) {
        // The user either closed the OAuth popup or didn't authorize
        // access.  Do nothing.
        return;
      } else {
        Meteor.accounts.makeClientLoggedIn(result.id, result.token);
      }
    });
  };

  var openCenteredPopup = function(url, width, height) {
    var screenX = typeof window.screenX !== 'undefined'
          ? window.screenX : window.screenLeft;
    var screenY = typeof window.screenY !== 'undefined'
          ? window.screenY : window.screenTop;
    var outerWidth = typeof window.outerWidth !== 'undefined'
          ? window.outerWidth : document.body.clientWidth;
    var outerHeight = typeof window.outerHeight !== 'undefined'
          ? window.outerHeight : (document.body.clientHeight - 22);

    // Use `outerWidth - width` and `outerHeight - height` for help in
    // positioning the popup centered relative to the current window
    var left = screenX + (outerWidth - width) / 2;
    var top = screenY + (outerHeight - height) / 2;
    var features = ('width=' + width + ',height=' + height +
                    ',left=' + left + ',top=' + top);

    var newwindow = window.open(url, 'Login', features);
    if (newwindow.focus)
      newwindow.focus();
    return newwindow;
  };
})();
