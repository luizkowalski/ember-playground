import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  session: Ember.inject.service('session'),
  actions: {
    login() {
      var controller = this.controller;
      this.get('session').authenticate('authenticator:torii', 'github').then(function(data){
        controller.transitionToRoute('auth');
      });
    }
  }
});
