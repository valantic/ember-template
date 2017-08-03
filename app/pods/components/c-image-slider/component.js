import Ember from 'ember';

export default Ember.Component.extend({
  // Component setup
  classNames: ['c-image-slider'],
  bemBlockName: 'c-image-slider',
  tagName: 'div',

  // Handed in properties
  speed: 0,
  pagination: true,
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  centered: true,
  items: null,
  navigation: true,
  showThumbnails: false,
  currentSlide: null,
  thumbsPerView: 5,

  // Closures

  // Internal properties

  // Internal functions

  // Actions
  actions: {
    onChange() {
      this.sendAction('onChange');
    },
    goToIndex(event) {
      const index = event.target.getAttribute('index');

      this.set('currentSlide', index);
    }
  }
});
