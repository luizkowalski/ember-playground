import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  firebase: firebase,
  fb_setup: false,
  messages: [],
  didRender(){
    if(!this.get('fb_setup')) {
      var cmpt = this;
      this.firebase.auth().signInWithCustomToken(this.get('fb_token')).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode + errorMessage);
      });
      var ref = this.firebase.database().ref("messages/"+this.get('room.uid'));

      ref.on("child_added", function(snapshot) {
          cmpt.messages.push(JSON.parse(snapshot.val()));
          cmpt.rerender();
          var elem = document.getElementById('message-body');
          elem.scrollTop = elem.scrollHeight + 50;
        }, function (errorObject) {
          console.log("The read failed: " + errorObject.code);
        });
        this.set('fb_setup', true);
    }
  },
  actions: {
    postMessage: function() {
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
      var div = document.getElementById("message-body");
      div.scrollIntoView(false);
    }
  }

});
