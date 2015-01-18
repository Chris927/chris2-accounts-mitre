# Use Your Own OAuth2 Provider

Use your own OAuth2 server (tested with the awesome [MitreID Connect
server](https://github.com/mitreid-connect/OpenID-Connect-Java-Spring-Server))
as authentication provider in your [Meteor](https://www.meteor.com/) app.

# How

Add this package:

```sh
meteor add chris2:accounts-mitre
```

Then configure the `mitre` service with client id and secret etc., as provided
by your (own) oauth2 provider:

```js
if (Meteor.isServer) {
  Meteor.startup(function () {
    ServiceConfiguration.configurations.remove({
      service: 'mitre'
    });
    ServiceConfiguration.configurations.insert({
      service: 'mitre',
      clientId: 'fill in',
      loginStyle: 'redirect',
      secret: 'fill in',
      issuer: 'https://myauthserver.com',
      requestPermissions: [ 'email', 'userinfo', 'openid' ]
    });
  });
}
```

Assuming you want to login by clicking a button, the following should work:

```js
Template.someTemplate.events({
  'click .login': function () {
    Meteor.loginWithMitre({}, function(err) {
      if (err) {
        console.log('loginWithMitre, err=', err);
      }
    });
  },
  'click .logout': function() {
    Meteor.logout();
  }
});
```

# Example

Grab [this demo Meteor
app](https://github.com/Chris927/oauth2-mitre-for-meteor-demo) for a
functioning example. (You have to run it yourself against your own oauth2
provider...)
