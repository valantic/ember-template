import Ember from 'ember';

export default Ember.Component.extend({
  // Component setup
  classNames: ['c-process-steps'],
  bemBlockName: 'c-process-steps',
  tagName: 'div',

  // Handed in properties
  steps: Ember.A(),
  // Closures

  // Internal properties
  _steps: Ember.computed('steps', function() {
    let steps = this.get('steps');

    if (steps && Ember.isArray(steps)) {
      steps = steps.map(step => Ember.Object.create({
        step: step.stepNumber,
        isSelected: step.active,
        isClickable: step.clickable,
        link: step.directURL,
        isLastItem: false
      }));

      if (steps[steps.length - 1]) {
        steps[steps.length - 1].set('isLastItem', true);
      }

      return steps;
    }

    return null;
  })

  // Internal functions

  // Actions
});
