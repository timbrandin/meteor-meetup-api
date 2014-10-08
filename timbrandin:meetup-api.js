_.extend(Meetup, {
  server: 'https://api.meetup.com',

  _getAccessToken: function(options) {
    options = options || {};

    var currentInvocation = DDP._CurrentInvocation.get();
    if (!options.user && currentInvocation) {
      options.user = Meteor.user();
    }

    if (!options.user
      || !options.user.services
      || !options.user.services.meetup
      || !options.user.services.meetup.accessToken) {
      Log.warn('Missing user or accessToken for user');
      return {};
    }

    return {
      access_token: options.user.services.meetup.accessToken
    }
  },

  _getUrl: function(resource) {
    return [Meetup.server, resource].join('/');
  },

  _call: function(method, resource, params, options) {
    var url = this._getUrl(resource);

    var config = ServiceConfiguration.configurations.findOne();
    if (config) {
      params = _.extend(params || {}, {
        sign: true,
        key: config.clientId
      });
    }

    params = _.extend(params || {}, this._getAccessToken(options));

    try {
      var result = HTTP.call(method, url, {
        params: params
      }).data;
    }
    catch (e) {
      Log.warn(e.toString());
    }
    return result;
  },

  get: function() {
    return Meetup._call.apply(Meetup, _.union(['GET'], arguments));
  },
  post: function() {
    return Meetup._call.apply(Meetup, _.union(['POST'], arguments));
  },
  put: function() {
    return Meetup._call.apply(Meetup, _.union(['PUT'], arguments));
  },
  del: function() {
    return Meetup._call.apply(Meetup, _.union(['DELETE'], arguments));
  }
});
