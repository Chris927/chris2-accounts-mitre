Package.describe({
  name: 'chris2:accounts-mitre',
  summary: 'Login service for Mitre accounts',
  version: '0.0.1',
  git: 'git@github.com:Chris927/chris2-accounts-mitre.git'
});

Package.onUse(function(api) {

  api.versionsFrom('1.0');
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('chris2:oauth2-mitre@0.0.2', ['client', 'server']);

  // api.add_files('github_login_button.css', 'client');

  api.add_files("mitre.js");
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('chris2:accounts-mitre');
  api.addFiles('chris2:accounts-mitre-tests.js');
});
