import Ember from 'ember';

export default Ember.Component.extend({
  // Component setup
  classNames: ['e-counter'],
  bemBlockName: 'e-counter',
  tagName: 'div',

  // Handed in properties
  disabled: false,
  value: 0,
  minValue: 0,
  maxValue: 9999999,
  unit: '',
  buttonStateUp: 'default',
  buttonStateDown: 'default',
  hasInputField: false,

  // Closures
  didReceiveAttrs(...args) {
    this._super(...args);

    this._setDisabledStates();
    this._checkValue();
  },

  // Internal properties
  _buttonStateUpClass: Ember.computed('buttonStateUp', function() {
    return `${this.get('bemBlockName')}__button--${this.get('buttonStateUp')}`;
  }),
  _buttonStateDownClass: Ember.computed('buttonStateDown', function() {
    return `${this.get('bemBlockName')}__button--${this.get('buttonStateDown')}`;
  }),

  // Internal functions
  // checks if it's allowed to count up or down, return a state
  _checkAllowedToCount(direction) {
    let state = false;

    if (direction === 'up' && this.get('value') < this.get('maxValue')) {
      state = true;
    } else if (direction === 'down' && this.get('value') > this.get('minValue')) {
      state = true;
    }

    return state;
  },

  // checks if the current Value is in the allowed range
  _checkValue() {
    if (this.get('value') > this.get('maxValue')) {
      this.set('value', this.get('maxValue'));
    }

    if (this.get('value') < this.get('minValue')) {
      this.set('value', this.get('minValue'));
    }
  },

  // counts up or down
  _count(direction) {
    if (direction === 'up') {
      this.set('value', parseInt(this.get('value'), 10) + 1);
      this.sendAction('countUp');
    }
    if (direction === 'down') {
      this.set('value', parseInt(this.get('value'), 10) - 1);
      this.sendAction('countDown');
    }
  },

  // sets the state variables for the state-classes for each button
  _setDisabledStates() {
    if (this.get('value') >= this.get('maxValue')) {
      this.set('buttonStateUp', 'disabled');
    } else {
      this.set('buttonStateUp', 'default');
    }

    if (this.get('value') <= this.get('minValue')) {
      this.set('buttonStateDown', 'disabled');
    } else {
      this.set('buttonStateDown', 'default');
    }
  },

  // function which's called when user clicks one of the buttons
  _countController(direction) {
    if (this._checkAllowedToCount(direction)) {
      this._count(direction);
      this._setDisabledStates();
      const owner = this.get('owner');

      if (owner) {
        owner.updateQuantity(this.get('value'));
      }
    }
  },

  // Actions
  actions: {
    /* eslint-disable object-shorthand */
    onCountDownClick: function(e) {
      e.stopPropagation();
      this._countController('down');
      this.sendAction('onCountDownClick');
    },

    onCountUpClick: function(e) {
      e.stopPropagation();
      this._countController('up');
      this.sendAction('onCountUpClicked');
    },

    onKeyUp() {
      this.sendAction('onKeyUp');
      this._checkValue();
      this._setDisabledStates();
    }

    /* eslint-enable object-shorthand */
  }
});
