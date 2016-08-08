import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin,{
  session: Ember.inject.service('session'),
  model(param){
    return this.store.findAll('room');
  },
  actions: {
    logout(){
      this.get('session').invalidate();
      this.transitionTo('index');
    }
  }
});
