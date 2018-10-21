import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | paperexample', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:paperexample');
    assert.ok(route);
  });
});
