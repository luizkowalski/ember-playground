import Ember from 'ember';
import GithubOauth2Provider from 'torii/providers/github-oauth2';

export default GithubOauth2Provider.extend({
  ajax: Ember.inject.service(),
  fetch(data) {
    return data;
  },
  open() {
    return this._super().then((data) => {
      const authCode = data.authorizationCode;
      return new Ember.RSVP.Promise(function(resolve, reject){
        Ember.$.ajax('http://127.0.0.1:8080/auth/github/code', {
          type: 'POST',
          crossDomain: true,
          dataType: 'json',
          data: { 'code': authCode },
          success: Ember.run.bind(null, resolve),
          error: Ember.run.bind(null, reject)
        });
      }).then(function(user){
        console.log(user.body);
        return {
          currentUser: user.body
        };
      });
    });
  }
});
