import Ember from 'ember';
import ResizeAware from 'ember-resize/mixins/resize-aware';
// BEGIN-FREESTYLE-USAGE e-panel-default
export default Ember.Component.extend(ResizeAware, {
  classNames: ['e-panel'],
  defaultClassName: 'e-panel',
  classNameBindings: [
    'computedClassName',
    'shadow:e-panel--shadow',
    'inline:e-panel--inline',
    'inlineSmUp:e-panel--inline-sm-up',
    'spacingRight:e-panel--spacing-right'
  ],
  state: 'default',
  shadow: false,
  border: 'thin',
  bigPaddingFlanks: false,
  insideScroll: false,
  inline: false,
  inlineSmUp: false,
  spacingRight: false,
  title: '',
  headingIncluded: false,
  tagNameTitle: 'h3',
  backgroundColor: 'transparent',
  scrollArrows: false,
  scrollWidthPerClick: 200,

  // Variables used for the ember-resize-addon
  resizeService: Ember.inject.service('resize'),
  resizeWidthSensitive: true,
  resizeHeightSensitive: false,

  computedClassName: Ember.computed('state', function() {
    return `e-panel--${this.get('state')}`;
  }),

  stateClassNames: Ember.computed('state', function() {
    const baseClass = 'e-panel__inner';

    return `${baseClass}--${this.get('state')}`;
  }),

  innerClassNames: Ember.computed('shadow', 'border', 'bigPaddingFlanks', 'backgroundColor', function() {
    let combinedClassNames = '';
    const shadowClass = 'e-panel__inner--shadow';
    const borderClass = `e-panel__inner--border-${this.get('border')}`;
    const paddingFlankClass = 'e-panel__inner--padding-flank-big';
    const backgroundColorClass = `e-panel__inner--background-color-${this.get('backgroundColor')}`;

    if (this.get('shadow')) {
      combinedClassNames += shadowClass;
      combinedClassNames += ' ';
    }

    if (this.get('border')) {
      combinedClassNames += borderClass;
      combinedClassNames += ' ';
    }

    if (this.get('bigPaddingFlanks')) {
      combinedClassNames += paddingFlankClass;
      combinedClassNames += ' ';
    }

    if (this.get('backgroundColor')) {
      combinedClassNames += backgroundColorClass;
    }

    return combinedClassNames;
  }),

  innerScrollClass: Ember.computed('insideScroll', function() {
    let className = '';

    if (this.get('insideScroll')) {
      className = 'e-panel__inner--insideScroll';
    }

    return className;
  }),

  innerScrollClassFullWidth: Ember.computed('insideScrollFullWidth', function() {
    let className = '';

    if (this.get('insideScrollFullWidth') === true) {
      className = 'e-panel__inner--insideScroll-full-width';
    }

    return className;
  }),

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

  // Checks if the "insideScroll" element has more width than his parent-container
  _hasScrollBar() {
    const htmlScrollWrapper = this.element.querySelector('.e-panel__inner');
    const htmlScrollPanel = this.element.querySelector('.e-panel__inner--insideScroll');
    const paddingLeft = parseInt(window.getComputedStyle(htmlScrollWrapper, null).getPropertyValue('padding-left'), 10);
    const paddingRight = parseInt(window.getComputedStyle(htmlScrollWrapper, null).getPropertyValue('padding-right'), 10);
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

  actions: {
    scrollX(direction) {
      this._scrollInside(direction);
    }
  }

});
// END-FREESTYLE-USAGE
