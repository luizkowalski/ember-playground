import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    postMessage(params){
      console.log(params);
    }
  }
});
