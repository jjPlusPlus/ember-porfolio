import Controller from '@ember/controller';
import {inject as service} from '@ember/service';
import DS from 'ember-data';
export default Controller.extend({
  firebaseApp: Ember.inject.service(),

  image: null,

  images: Ember.computed("model.firstObject.images", function() {
    const project = this.get("model.firstObject");
    return DS.PromiseObject.create({
      promise: project.get('images').then((images) => {
        return images;
      })
    });
  }),

  actions: {
    upload() {
      const file = this.get("image");
      const project = this.get("model.firstObject");
      const metadata = {
        'contentType' : file.type
      };

      // Need to do this to get the actual ref from the services' promise
      this.get('firebaseApp').storage().then(storage => {
        const storageRef = storage.ref();

        // Need to save the new Image record first in order to get it's ID (assinged by Fbase)
        const newImageRecord = this.store.createRecord('image', {
          name: name,
          timestamp: new Date().getTime(),
          project: project.id
        });

        newImageRecord.save().then(newImage => {

          // Now we can set the new image's name to match the Image record ID in firebase
          let uploadTask = storageRef.child(`uploads/${newImage.id}`).put( file, metadata );

          uploadTask.on( 'state_changed', null, (error) => {
            console.error( 'Upload Failed:', error );
          }, () => {

            // When the upload finishes, setting the newImageRecord's url to the download URL
            uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
              newImageRecord.set("url", downloadURL);
              newImageRecord.save();
              project.images.addObject(newImageRecord);
              project.save();
            });
          });
        });
      });


    },

    fileChanged: function(event) {
      this.set("image", event[0]);
    }
}
});
