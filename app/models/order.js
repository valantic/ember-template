import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  'order-number': attr(),
  'created-at': attr(),
  'amount-of-line-items': attr(),
  'status-code': attr()
});
