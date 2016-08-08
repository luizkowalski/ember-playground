export default Ember.Route.extend({
  session: Ember.inject.service('session'),
  actions: {
    logout(){
      this.get('session').invalidate();
      this.transitionTo('index');
    },
    accessDenied: function() {
      this.transitionTo('index');
    }
  }
});
