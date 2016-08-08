import DS from 'ember-data';

export default DS.Model.extend({
  uid: DS.attr('number'),
  createdAt: DS.attr('number'),
  name: DS.attr('string'),
  fullName: DS.attr('string'),
  description: DS.attr('string'),
  homepage: DS.attr('string'),
  owner: DS.attr('string'),
  private: DS.attr('boolean'),
  organization: DS.belongsTo('organization', { async: true })
});
