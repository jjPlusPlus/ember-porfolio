import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  session: service(),

  beforeModel() {
    const session = this.get('session');
    if (session.isAuthenticated) {
      // user is not logged in; redirect to the index;
      this.transitionTo('/admin/settings');
    }
  }
});
