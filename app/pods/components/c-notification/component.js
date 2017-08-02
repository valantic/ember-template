import Ember from 'ember';

export default Ember.Component.extend({
  // Component setup
  classNames: ['c-notification'],
  classNameBindings: [
    'isInfo:c-notification--info',
    'isError:c-notification--error',
    'isSuccess:c-notification--success',
    'isHidden:c-notification--hidden'
  ],
  bemBlockName: 'c-notification',
  tagName: 'div',

  // Handed in properties
  isInfo: false,
  isError: false,
  isSuccess: false,
  isHidden: false,
  message: '',
  data: null,
  secondsToShow: -1,

  // Closures
  didReceiveAttrs(...args) {
    this._super(...args);
    const data = this.get('data');

    if (data) {
      this.set('message', data.message);
      this.set('secondsToShow', data.secondsToShow);

      if (data.isError) {
        this.set('isError', true);
      }
      if (data.isSuccess) {
        this.set('isSuccess', true);
      }
      if (data.isInfo) {
        this.set('isInfo', true);
      }
    }
  },
  didRender() {
    this._super();
    const secondsToShow = this.get('secondsToShow');

    if (secondsToShow !== -1) {
      Ember.run.later(() => {
        this.triggerAction({
          action: 'close',
          target: this
        });
      }, 1000 * secondsToShow);
    }
  },

  // Internal properties

  // Internal functions

  // Actions
  actions: {
    close() {
      this.set('isHidden', true);
      this.sendAction('notificationClosed');
    }
  }
});
