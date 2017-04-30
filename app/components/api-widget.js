import Ember from 'ember';

export default Ember.Component.extend({
  editing: false,
  actions: {
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
