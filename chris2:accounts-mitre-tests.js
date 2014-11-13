if (Meteor.isClient) {
  Tinytest.add('check login function is there', function (test) {
    test.equal(Meteor.loginWithMitre != null, true);
  });
};
