import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel() {
    const session = this.get("session");
    if (!session.isAuthenticated) {
      // user is not logged in; redirect to the index;
      this.transitionTo("/admin/index");
    }
  }
});
