import Ember from 'ember';

export default Ember.Route.extend({
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
