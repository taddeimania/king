import Ember from 'ember';

export default Ember.Component.extend({
  editing: false,
  deleting: false,
  store: Ember.inject.service('store'),
  actions: {
    confirmDelete() {
      this.set("deleting", true);
    },
    cancelDelete() {
      this.set("deleting", false);
    },
    actualDelete() {
      let store = this.get("store");
      store.findRecord('api', this.get("model.id"), { backgroundReload: false }).then(function(api) {
        api.destroyRecord()
      });
    },
    saveEditing() {
      let model = this.get('model');
      model.save().then((response) => {
        this.send("toggleEditing");
      });
    },
    toggleEditing() {
      this.set('editing', !this.get('editing'));
    },
    cancelEditing() {
      let model = this.get('model');
      this.get('model').rollbackAttributes();
      this.set('editing', !this.get('editing'));
    }
  }
});
