import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  actions: {
    postMessage: function(params) {
      var token = this.get('token');
      var content = this.get('content');
      var uid = this.get('room.uid');
      Ember.$.ajax({
         type: "POST",
         contentType: "application/json",
         url: "http://127.0.0.1:8080/v1/rooms/"+uid+"/messages/new",
         headers: {
           'Auth-Token': token
         },
         data: JSON.stringify({ content: content })
       });
      this.set('content', '');
    }
  }
});
