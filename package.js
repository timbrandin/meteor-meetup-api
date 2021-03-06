Package.describe({
  summary: "Meetup API using Meteor Accounts user tokens.",
  version: "1.0.0",
  git: "https://github.com/timbrandin/meteor-meetup-api"
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
