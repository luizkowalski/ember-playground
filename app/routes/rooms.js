import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin,{
  session: Ember.inject.service('session'),
  model(){
    var rooms = this.store.findAll('room');
    return rooms;
  },
  actions: {
    logout(){
      this.get('session').invalidate();
      this.transitionTo('index');
    }
  }
});
