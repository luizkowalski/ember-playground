import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('rooms');
  this.route('room', { path: '/room/:uid' });
  this.route('organization');
});

export default Router;
