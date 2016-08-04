import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    logout(){
      this.get('session').invalidate();
    },
    accessDenied: function() {
      this.transitionTo('index');
    }
  }
});
