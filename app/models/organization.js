import DS from 'ember-data';

export default DS.Model.extend({
  uid: DS.attr('number'),
  createdAt: DS.attr('number'),
  avatar: DS.attr('string'),
  blog: DS.attr('string'),
  company: DS.attr('string'),
  login: DS.attr('string'),
  name: DS.attr('string'),
  location: DS.attr('string'),
  rooms: DS.hasMany('room', { async: true })
});
