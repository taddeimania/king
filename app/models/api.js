import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  retries: DS.attr(),
  http_if_terminated: DS.attr("boolean"),
  https_only: DS.attr("boolean"),
  preserve_host: DS.attr("boolean"),
  strip_uri: DS.attr("boolean"),
  upstream_connect_timeout: DS.attr(),
  upstream_read_timeout: DS.attr(),
  upstream_send_timeout: DS.attr(),
  upstream_url: DS.attr(),
  hosts: DS.attr()
});
