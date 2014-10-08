Package.describe({
  summary: "Adding an API for Meetup",
  version: "1.0.0",
  git: " \* Fill me in! *\ "
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.3.1');
  api.use('oauth', 'server');
  api.use('http', 'server');
  api.use('underscore', 'server');
  api.use('meetup', 'server');
  api.use('service-configuration', 'server');

  api.export('Meetup', 'server');

  api.addFiles('timbrandin:meetup-api.js', 'server');
});

Package.onTest(function(api) {
  api.use('tinytest', 'server');
  api.use('timbrandin:meetup-api', 'server');
  api.addFiles('timbrandin:meetup-api-tests.js', 'server');
});
