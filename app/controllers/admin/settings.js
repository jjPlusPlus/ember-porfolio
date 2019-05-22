import Controller from '@ember/controller';

export default Controller.extend({
  editing: false,

  actions: {
    toggleEdit: function() {
      this.toggleProperty("editing");
    },

    save: function() {
      const model = this.get("model");
      if (window.confirm("Are you sure?")) {
        model.save();
        this.toggleProperty("editing");
      }
    },

    cancel: function() {
      const model = this.get("model");
      model.content.firstObject.rollbackAttributes();
      this.toggleProperty("editing");
    }
  }
});
