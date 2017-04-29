import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeFindAllResponse(store, type, payload) {
    payload.data.forEach((record) => {
      record["type"] = type.modelName
      record["attributes"] = record;
    })
    return payload;
  }
});
