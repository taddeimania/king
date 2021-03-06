import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("api");
  this.route("add-api");
  this.route("status");
  this.route("info");
});

export default Router;
