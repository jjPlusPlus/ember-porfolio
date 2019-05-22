import DS from 'ember-data';
const { Model, attr, hasMany, belongsTo } = DS;

export default Model.extend({
  name: attr('string'),
  url: attr('string'),
  alt: attr('string'),
  timestamp: attr('string'),

  // Relationships
  project: belongsTo('project')
});
