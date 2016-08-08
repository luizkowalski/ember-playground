import DS from 'ember-data';

export default DS.Model.extend({
  login: DS.attr('string'),
  uid: DS.attr('number'),
  backendAccessToken: DS.attr('string'),
  name: DS.attr('string'),
  email: DS.attr('string'),
  location: DS.attr('string'),
  company: DS.attr('string'),
  avatar: DS.attr('string'),
  memberSince: DS.attr('date'),
  firebaseJwt: DS.attr('string')
});
