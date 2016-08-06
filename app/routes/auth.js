import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    console.log(this.get('session.data'));
  },
  actions: {
    // logout(){
    //   this.get('session').invalidate();
    // }
  }
});
