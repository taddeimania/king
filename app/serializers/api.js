import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeFindRecordResponse(store, type, payload) {
    let newRecord = {data: {}}
    newRecord.data.attributes = payload;
    newRecord.data.id = payload.id;
    return newRecord;
  },
  normalizeFindAllResponse(store, type, payload) {
    payload.data.forEach((record) => {
      record["type"] = type.modelName
      record["attributes"] = record;
    })
    return payload;
  }
});
