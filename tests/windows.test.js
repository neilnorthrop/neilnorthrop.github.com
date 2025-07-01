QUnit.module('jquery.windows');

QUnit.test('isOnScreen returns true when element is visible', function(assert) {
  var $el = jQuery('#test-window');
  jQuery(window).scrollTop(0);
  assert.ok($el.isOnScreen(), 'element should be visible');
});

QUnit.test('isOnScreen returns false when element is out of view', function(assert) {
  var $el = jQuery('#test-window');
  jQuery(window).scrollTop(1000);
  assert.notOk($el.isOnScreen(), 'element should not be visible');
});

QUnit.test('ratioVisible returns 1 when element fully visible', function(assert) {
  var $el = jQuery('#test-window');
  jQuery(window).scrollTop(0);
  assert.equal($el.ratioVisible(), 1, 'ratio should be 1');
});

QUnit.test('ratioVisible returns 0 when element off screen', function(assert) {
  var $el = jQuery('#test-window');
  jQuery(window).scrollTop(1000);
  assert.equal($el.ratioVisible(), 0, 'ratio should be 0');
});
