import DS from 'ember-data';
import ENV from '../config/environment';

export default DS.JSONAPIAdapter.extend({
  host: ENV.APP.API_HOST,
  namespace: "",
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },

  ajaxOptions (url, type, options) {
    let hash = this._super(...arguments);
    if (Object.keys(hash.data).length > 0){
      hash.data = hash.data.slice(1, -1);
    }
    return hash;
  },

  createRecord(store, type, snapshot) {
    let data = Ember.$.param(snapshot._attributes);
    let url = this.buildURL(type.modelName, null, snapshot, 'createRecord');
    return this.ajax(url, "POST", { data: data });
  },

  updateRecord (store, type, snapshot){
      let id = snapshot.id;
      if (typeof snapshot._attributes.hosts === "object"){
        snapshot._attributes.hosts = snapshot._attributes.hosts.join(",");
      }
      let data = Ember.$.param(snapshot._attributes);
      let url = this.buildURL(type.modelName, id, snapshot, 'updateRecord');
      return this.ajax(url, "PATCH", { data: data });
  }
});
