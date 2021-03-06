Package.describe({
  name: 'chris2:accounts-mitre',
  summary: 'Login service for Mitre accounts',
  version: '0.0.17',
  git: 'https://github.com/Chris927/chris2-accounts-mitre'
});

Package.onUse(function(api) {

  api.versionsFrom('1.0');
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('chris2:oauth2-mitre@0.1.5', ['client', 'server']);
  api.use('service-configuration', 'server');
  api.imply('service-configuration', 'server');

  // api.add_files('github_login_button.css', 'client');

  api.add_files("mitre.js");
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('chris2:accounts-mitre');
  api.addFiles('chris2:accounts-mitre-tests.js');
});
