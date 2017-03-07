import Ember from 'ember';
import ResizeAware from 'ember-resize/mixins/resize-aware';

export default Ember.Component.extend(ResizeAware, {
  // Services
  resizeService: Ember.inject.service('resize'),
  
  // Component setup
  classNames: ['e-panel'],
  bemBlockName: 'e-panel',
  tagName: 'div',
  classNameBindings: [
    'computedClassName',
    'shadow:e-panel--shadow',
    'inline:e-panel--inline',
    'inlineSmUp:e-panel--inline-sm-up',
    'spacingRight:e-panel--spacing-right'
  ],
  
  // Handed in properties
  state: 'default',
  shadow: false,
  border: 'thin',
  bigPaddingFlanks: false,
  insideScroll: false,
  scrollWidthPerClick: 200,
  inline: false,
  inlineSmUp: false,
  spacingRight: false,
  headingIncluded: false,
  title: '',
  tagNameTitle: 'h3',
  titleState: 'default',
  backgroundColor: 'transparent',
  scrollArrows: false,
  
  // Internal properties
  resizeWidthSensitive: true, // used for "resizeAware" Addon
  resizeHeightSensitive: false, // used for "resizeAware" Addon
  _computedClassName: Ember.computed('state', function() {
    return `e-panel--${this.get('state')}`;
  }),
  _innerClassNames: Ember.computed(
    'shadow',
    'border',
    'bigPaddingFlanks',
    'backgroundColor',
    'state',
    function() {
      const classNames = [];
      const bemElementName = `${this.get('bemBlockName')}__inner`;

      if (this.get('shadow')) {
        classNames.push(`${bemElementName}--shadow`);
      }

      if (this.get('border')) {
        classNames.push(`${bemElementName}--border-${this.get('border')}`);
      }

      if (this.get('bigPaddingFlanks')) {
        classNames.push(`${bemElementName}--padding-flank-big`);
      }

      if (this.get('backgroundColor')) {
        classNames.push(`${bemElementName}--background-color-${this.get('backgroundColor')}`);
      }

      if (this.get('state')) {
        classNames.push(`${bemElementName}--${this.get('state')}`);
      }

      return classNames.join(' ');
    }
  ),
  _innerScrollClassNames: Ember.computed(
    'insideScroll',
    'insideScrollFullWidth',
    function() {
      const classNames = [];
      const bemElementName = `${this.get('bemBlockName')}__inner`;

      if (this.get('insideScroll')) {
        classNames.push(`${bemElementName}--insideScroll`);
      }

      if (this.get('insideScrollFullWidth')) {
        classNames.push(`${bemElementName}--insideScroll-full-width`);
      }

      return classNames.join(' ');
    }
  ),

  // Handed in closures
  didRender() {
    if (this.get('insideScroll') === true) {
      Ember.run.later(this, () => {
        this._displayArrows();
      });
    }
  },
  // Fires events when User changes the window-size
  didResize() {
    if (this.get('insideScroll') === true) {
      this._displayArrows();
    }
  },

  // Internal methods
  // Checks if the "insideScroll" element has more width than his parent-container
  _hasScrollBar() {
    const htmlScrollWrapper = this.element.querySelector('.e-panel__inner');
    const htmlScrollPanel = this.element.querySelector('.e-panel__inner--insideScroll');
    const paddingLeft
        = parseInt(window.getComputedStyle(htmlScrollWrapper, null).getPropertyValue('padding-left'), 10);
    const paddingRight
        = parseInt(window.getComputedStyle(htmlScrollWrapper, null).getPropertyValue('padding-right'), 10);
    const wrapperWidth = htmlScrollWrapper.clientWidth - paddingLeft - paddingRight;
    const scrollPanelWidth = htmlScrollPanel.scrollWidth;

    return scrollPanelWidth > wrapperWidth;
  },

  _displayArrows() {
    const hasScrollBar = this._hasScrollBar();

    this.set('scrollArrows', hasScrollBar);
    this.set('insideScrollFullWidth', !hasScrollBar);
  },

  _scrollInside(direction) {
    const elem = this.element.querySelector('.e-panel__inner--insideScroll');
    const currentPos = elem.scrollLeft;
    const scrollX = this.get('scrollWidthPerClick');

    if (direction === 'right') {
      elem.scrollLeft = currentPos + scrollX;
    } else if (direction === 'left') {
      elem.scrollLeft = currentPos - scrollX;
    }
  },

  // Actions
  actions: {
    scrollX(direction) {
      this._scrollInside(direction);
    }
  }

});
