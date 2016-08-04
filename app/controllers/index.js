import Ember from 'ember';

export default Ember.Controller.extend({
  total: 0,
  actions: {
    increment(){
      this.set('total', parseInt(this.get('total') || 0)+1);
    }
  }
});
