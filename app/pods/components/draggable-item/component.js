import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['draggableItem'],
  attributeBindings: ['draggable'],
  draggable: 'true',
  // To provide visual clues to our user that the element is a dropzone for dragging things into
  classNameBindings: ['dragClass'],
  dragClass: 'deactivated',

  dragStart(event) {
    this.set('dragClass', 'activated');

    /* Restricts what 'type of drag' the user can perform on the element.
       It is used in the drag-and-drop processing model to initialize the dropEffect
       during the dragenter and dragover events. The property can be set to the
       following values: none, copy, copyLink, copyMove, link, linkMove, move, all, and uninitialized. */
    event.dataTransfer.effectAllowed = 'copy';

    /* Controls the feedback that the user is given during the dragenter and dragover events.
       When the user hovers over a target element, the browser's cursor will indicate what type
       of operation is going to take place (e.g. a copy, a move, etc.).
       The effect can take on one of the following values: none, copy, link, move. */
    event.dataTransfer.dropEffect = 'copy';

    return event.dataTransfer.setData('text/data', this.get('content'));
  },

  dragEnd() {
    this.set('dragClass', 'deactivated');
  }

});
