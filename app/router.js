import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route("index");
  this.route("api");
  this.route("status");
  this.route("info");
});

export default Router;
