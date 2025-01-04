import { setupTest } from 'cat-app/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | cat', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('cat', {});
    assert.ok(model, 'model exists');
  });
});
