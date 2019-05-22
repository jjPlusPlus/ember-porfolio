import Route from '@ember/routing/route';

export default Route.extend({
  model: function() {
    return this.store.query('project', {limit: 10});
  },
  afterModel: function(model) {
    debugger;
  }
});
