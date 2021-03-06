Package.describe({
  summary: "Common code for OAuth2-based login services",
  internal: true
});

Package.on_use(function (api) {
  api.use('accounts', ['client', 'server']);

  api.add_files('oauth2_common.js', ['client', 'server']);
  api.add_files('oauth2_server.js', 'server');
  api.add_files('oauth2_client.js', 'client');
});

Package.on_test(function (api) {
  api.use('accounts-oauth2-helper', 'server');
  api.add_files("oauth2_tests.js", 'server');
});
