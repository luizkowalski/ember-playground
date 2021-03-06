/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'chathub-ember',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV['ember-simple-auth'] = {
    authenticationRoute: 'index'
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV['torii'] = {
      sessionServiceName: 'session',
      providers: {
        'github-oauth2': {
          apiKey: 'ae4f289d1087fe71eb4d',
          scope: 'repo,user:email',
          redirectUri: 'http://127.0.0.1:4200/auth'
        }
      }
    };
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV['torii'] = {
      sessionServiceName: 'session',
      providers: {
        'github-oauth2': {
          apiKey: 'ca7d7f3a94dc9c26da65',
          scope: 'repo,user:email',
          redirectUri: 'https://www.chathub.us/auth'
        }
      }
    };
  }

  return ENV;
};
