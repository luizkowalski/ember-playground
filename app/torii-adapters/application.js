import Ember from 'ember';

export default Ember.Object.extend({
  open: function(authentication){
    var code = authentication.authorizationCode;
    return new Ember.RSVP.Promise(function(resolve, reject){
      Ember.$.ajax('http://127.0.0.1:8080/auth/github/code', {
        type: 'POST',
        crossDomain: true,
        dataType: 'json',
        data: { 'code': code },
        success: Ember.run.bind(null, resolve),
        error: Ember.run.bind(null, reject)
      });
    }).then(function(user){
      console.log(user.body);
      return {
        currentUser: user.body
      };
    });
  }
});
