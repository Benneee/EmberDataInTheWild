import { module, test } from 'qunit';
import { setupTest } from 'cat-app/tests/helpers';

module('Unit | Route | cats', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:cats');
    assert.ok(route);
  });
});
