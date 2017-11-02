import { moduleFor, test } from 'ember-qunit';

moduleFor('service:recorder', 'Unit | Service | recorder', {
  // Specify the other units that are required for this test.
  needs: ['service:crypto']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let service = this.subject();
  assert.ok(service);
});
