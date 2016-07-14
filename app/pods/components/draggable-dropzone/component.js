/**
 * @see https://emberway.io/ember-js-and-html5-drag-and-drop-fa5dfe478a9a#.292t5996z
 */

import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['draggableDropzone'],
  // To provide visual clues to our user that the element is a dropzone for dragging things into
  classNameBindings: ['dragClass'],
  dragClass: 'deactivated',

  // Ember built-in HTML5 drag and drop events
  // http://emberjs.com/api/classes/Ember.View.html#toc_event-names
  dragLeave(event) {
    event.preventDefault();
    this.set('dragClass', 'deactivated');
  },

  dragOver(event) {
    event.preventDefault();
    this.set('dragClass', 'activated');
  },

  drop(event) {
    // See https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer
    const data = event.dataTransfer.getData('text/data');

    this.sendAction('dropped', data);
    this.set('dragClass', 'deactivated');
  }

});
