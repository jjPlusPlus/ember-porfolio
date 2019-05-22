import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  authEmail: "",
  password: "",
  session: service(),
  firebaseApp: service(),

  actions: {
    signUserIn: function() {
      const auth = this.get("firebaseApp").auth();
      const email = this.get("authEmail");
      const pass = this.get("password");

      auth._result.signInAndRetrieveDataWithEmailAndPassword(email, pass)
        .then((userResponse) => {
          // Login successful; redirect to /admin/settings
          this.transitionToRoute('/admin/settings');
        })
        .catch((err) => {
          // Login failed; warn the user
          window.alert("Login Failed please try again: " + err.message);
        });
    }
  }
});
