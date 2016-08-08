import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),
  actions: {
    login() {
      var route = this;
      this.get('session').authenticate('authenticator:torii', 'github').then(function() {
        route.transitionTo('rooms');
      });
    }
  }
});
