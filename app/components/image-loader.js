import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  store: service(),
  image: null,
  loadedImage: computed("image", function() {
    const id = this.get("image.id");
    return this.get('store').findRecord('image', id);
  }),
});
