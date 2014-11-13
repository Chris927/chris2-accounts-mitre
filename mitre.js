Accounts.oauth.registerService('mitre');

if (Meteor.isClient) {
  Meteor.loginWithMitre = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Mitre.requestCredential(options, credentialRequestCompleteCallback);
  };
} else {
  Accounts.addAutopublishFields({ // TODO: not sure this makes sense, compare packages/accounts-github/github.js in git://github.com/meteor/meteor.git
    forLoggedInUser: ['services.mitre'],
    forOtherUsers: ['services.mitre.username']
  });
}
