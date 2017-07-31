import Ember from 'ember';

export default Ember.Service.extend({
  getWidth() {
    return window.innerWidth; // || documentElement.clientWidth || bodyElement.clientWidth;
  },

  getViewPort() {
    const width = this.getWidth();
    let viewport;

    switch (true) {
      case width >= 1600:
        viewport = 'xl';
        break;
      case width >= 1200:
        viewport = 'lg';
        break;
      case width >= 992:
        viewport = 'md';
        break;
      case width >= 768:
        viewport = 'sm';
        break;
      case width >= 480:
        viewport = 'xs';
        break;
      case width >= 0:
        viewport = 'xxs';
        break;
      default:
        break;
    }

    return viewport;
  }
});
