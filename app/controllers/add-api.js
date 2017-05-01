import Ember from 'ember';

export default Ember.Controller.extend({
  // defaults
  stripUri: true,
  preserveHost: false,
  retries: 5,
  upstreamConnectTimeout: 60000,
  upstreamSendTimeout: 60000,
  upstreamReadTimeout: 60000,
  httpsOnly: false,
  httpIfTerminated: true,

  resetFormValues() {
    this.set("apiName", "");
    this.set("apiUpstreamUrl", "");
    this.set("apiHosts", "");
    this.set("apiUris", "");
    this.set("apiMethods", "");
    this.set("retries", 5);
    this.set("upstreamConnectTimeout", 60000);
    this.set("upstreamSendTimeout", 60000);
    this.set("upstreamReadTimeout", 60000);
    this.set("stripUri", true);
    this.set("preserveHost", false);
    this.set("httpsOnly", false);
    this.set("httpIfTerminated", true);
  },
  actions: {
    createApi() {
      let newApi = this.store.createRecord('api', {
        name: this.get("apiName"),
        upstream_url: this.get("apiUpstreamUrl"),
        hosts: this.get("apiHosts"),
        uris: this.get("apiUris"),
        methods: this.get("apiMethods"),
        retries: this.get("retries"),
        upstream_connect_timeout: this.get("upstreamConnectTimeout"),
        upstream_send_timeout: this.get("upstreamSendTimeout"),
        upstream_read_timeout: this.get("upstreamReadTimeout"),
        strip_uri: this.get("stripUri"),
        preserve_host: this.get("preserveHost"),
        https_only: this.get("httpsOnly"),
        http_if_terminated: this.get("httpIfTerminated"),
      });
      newApi.save().then((response) => {
        this.resetFormValues();
        this.transitionToRoute('api');
      });
    }
  }
});
