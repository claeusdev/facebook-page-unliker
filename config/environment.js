/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'page-unliker',
    environment: environment,
    baseURL: '/',
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
    },
  };

  ENV['torii'] = {
    providers: {
      'facebook-connect': {
        appId: '434327266716112',
        scope: 'user_likes,email',
        xfbml: false
      }
    }
  }

  ENV.contentSecurityPolicy = {
    'frame-src': "*.facebook.com *.twitter.com",
    'script-src': "'self' 'unsafe-eval' *.twitter.com *.new-relic.com facebook.com *.facebook.com *.nr-data.net *.google.com *.google-analytics.com *.facebook.net *.newrelic.com 'unsafe-inline'",
    'connect-src': "'self' *.nr-data.net",
    'style-src': "'self' 'unsafe-inline'"
  }

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
