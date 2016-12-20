import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',
  classNames: ['e-button'],
  bemBlockName: 'e-button',
  classNameBindings: [
    'isCTA:e-button--cta:e-button--default',
    'isActive:e-button--active',
    'hasHover:e-button--hover',
    'hasFocus:e-button--focus',
    'disabled:e-button--disabled',
    'href:e-button--link',
    'isSuccess:e-button--success',
    'isCancel:e-button--cancel',
    'isIconButton:e-button__icon-outer',
    'iconButtonSquare:e-button__icon-outer--square',
    'iconButtonRectangle:e-button__icon-outer--rectangle',
    'iconButtonMini:e-button__icon-outer--mini',
    'fullWidth:e-button--full-width',
    'smallSquare:e-button--small-square',
    'bigSquare:e-button--big-square',
    'transparent:e-button--transparent',
    'horScrollButton:e-button--hor-scroll',
    'fill:e-button--fill'
  ],
  attributeBindings: [
    'href',
    'name',
    'title',
    'type',
    'disabled',
    'target'
  ],
  href: null,
  name: null,
  preventDefault: false,
  title: null,
  type: null,
  target: null,
  // Flags
  isCTA: false,
  isActive: false,
  hasHover: false,
  hasFocus: false,
  disabled: false,
  isSuccess: false,
  isCancel: false,
  isIconButton: false,
  iconButtonSquare: false,
  iconButtonRectangle: false,
  iconButtonMini: false,
  fullWidth: false,
  smallSquare: false,
  bigSquare: false,
  transparent: false,
  fill: false,
  horScrollButton: false,

  click() {
    this.sendAction();
  },

  // This will change the class name of the component according to active state.
  // The CSS states will take care of the design normally.
  mouseEnter() {
    this.set('hasHover', true);
  },
  mouseLeave() {
    this.set('hasHover', false);
  },
  mouseDown() {
    this.set('isActive', true);
  },
  mouseUp() {
    this.set('isActive', false);
  }
});
