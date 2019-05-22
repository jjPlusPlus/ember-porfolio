import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default Route.extend({
  session: service(),

  beforeModel() {
    const session = this.get("session");
    if (!session.isAuthenticated) {
      // user is not logged in; redirect to the index;
      this.transitionTo("/admin/index");
    }
  },

  model() {
    return this.store.query("setting", {limit: 1});
  },

  afterModel(model, controller) {
    if (model.content.length === 0) {
      // There was no setting model yet! Let's create one with blank values
      const newSettingsRecord = this.store.createRecord('setting', {
        firstName: "Jon",
        lastName: "Snow"
      });
      newSettingsRecord.save();
      return newSettingsRecord;
    }
  }
});
