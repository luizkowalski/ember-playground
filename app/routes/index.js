import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    login() {
      var route = this;
      this.get('session').open('github-oauth2').then(function(){
        route.transitionTo('auth');
      });
    }
  }
});
