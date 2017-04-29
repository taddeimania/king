import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Route.extend({
  model() {
    return Ember.$.getJSON(ENV.APP.API_HOST).then((response) => {
      return response;
    });
  }
});
