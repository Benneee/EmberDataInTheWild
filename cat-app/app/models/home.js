import Model, { hasMany } from '@ember-data/model';

export default class HomeModel extends Model {
  @hasMany('cat', { async: true, inverse: 'home' }) cats;
}
