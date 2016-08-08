import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTAdapter.extend({
  host: 'http://127.0.0.1:8080/v1',
  headers: Ember.computed('session.data.authenticated.currentUser.backendAccessToken', function() {
    return {
      "Auth-Token": this.get("session.data.authenticated.currentUser.backendAccessToken"),
    };
  })
});
