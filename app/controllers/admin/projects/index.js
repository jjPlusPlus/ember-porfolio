import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  actions: {
    editProject(id) {
      this.transitionToRoute('/admin/project', id);
    }
  }
});
