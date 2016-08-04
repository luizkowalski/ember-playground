import Ember from 'ember';

export default Ember.Object.extend({
  open: function(authentication){
    var code = authentication.authorizationCode;
    return new Ember.RSVP.Promise(function(resolve, reject){
      Ember.$.ajax({
        type: 'POST',
        url: 'https://github.com/login/oauth/access_token',
        data: { 'code': code, 'client_id': 'ae4f289d1087fe71eb4d'  },
        dataType: 'json',
        beforeSend: function (xhr) {
          xhr.setRequestHeader("Accept", "application/json");
          xhr.setRequestHeader("Content-Type", "application/json");
          xhr.setRequestHeader("Access-Control-Allow-Origin", "http://127.0.0.1:4200/");
        },
        success: Ember.run.bind(null, resolve),
        error: Ember.run.bind(null, reject)
      });
    }).then(function(user){
      // The returned object is merged onto the session (basically). Here
      // you may also want to persist the new session with cookies or via
      // localStorage.
      return {
        currentUser: user
      };
    });
  }
});
