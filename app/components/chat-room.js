import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    postMessage: function(params) {
      console.log(this.get('uid'));
      console.log(this.get('content'));

      this.set('content', '');
    }
  }
});
