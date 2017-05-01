import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('api').catch((response) => {
      return {"not_running": true};
    });
  }
});
