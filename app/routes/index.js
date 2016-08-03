import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  session: Ember.inject.service('session'),
  actions: {
    login() {
      var controller = this.controller
       this.get('torii').open('github-oauth2').then(function(authData){
         console.log(authData);
         controller.set('login', authData);
         controller.transitionToRoute('auth');
       }, function(error){
         console.log(error);
       });
    }
  }
});
