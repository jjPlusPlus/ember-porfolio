import DS from 'ember-data';
const { Model, hasMany, attr } = DS;

export default Model.extend({
  name: attr('string'),
  description: attr('string'),
  timestamp: attr('date'),

  //Relationships
  // tags: hasMany('tag'),
  images: hasMany('image', {async: true}),

  //Special switch
  isFeatured: attr('boolean'),
});
