import Ember from 'ember';

export const isRetinaDisplay = () => window.devicePixelRatio > 1;

export default Ember.Component.extend({
  // Services
  viewport: Ember.inject.service('viewport'),

  // Component setup
  classNames: ['c-media-container'],
  bemBlockName: 'c-media-container',
  tagName: 'img',
  attributeBindings: ['alt', 'src'],

  // Handed in properties
  data: null,
  medias: Ember.A(),
  selectorXXS: '',
  selectorXS: '',
  selectorSM: '',
  selectorMD: '',
  selectorLG: '',
  selectorXL: '',
  showDefault: false,

  // Closures
  didReceiveAttrs(...args) {
    this._super(...args);
    const data = this.get('data');
    let medias;

    if (data) {
      if (data.medias) {
        medias = data.medias;
      } else {
        medias = data;
      }
    } else {
      medias = this.get('medias');
    }

    if (!medias || medias.length === 0) {
      this.set('showDefault', true);
      this.set('src', 'http://via.placeholder.com/350x150?text=default');
      this.set('alt', 'Default image');
      // this.set('tagName', 'div');
      // this.get('classNameBindings').push('defaultImageAspectRatio2x1:c-media-container--defaultImageAspectRatio2x1');
    } else {
      const altText = medias[0].altText ? medias[0].altText : 'defaul ALT text';

      this._setMediaUrls(altText, medias);
    }
  },
  didRender() {
    this._super();
    const showDefault = this.get('showDefault');

    if (!showDefault) {
      window.addEventListener('resize', this._debouncedUpdateUrl.bind(this));
    }
  },
  willDestroyElement() {
    this._super();
    const showDefault = this.get('showDefault');

    if (showDefault && showDefault.length > 0) {
      window.removeEventListener('resize', this._debouncedUpdateUrl.bind(this));
    }
  },

  // Internal properties
  _urls: Ember.computed(() => ({ screen_xxs: '', screen_xs: '', screen_sm: '', screen_md: '', screen_lg: '', screen_xl: '' })),

  // Internal functions
  _setMediaUrls(altText, medias) {
    const retinaPostfix = isRetinaDisplay() ? 'Retina' : '';
    const selectorXXS = this.get('selectorXXS');
    const selectorXS = this.get('selectorXS');
    const selectorSM = this.get('selectorSM');
    const selectorMD = this.get('selectorMD');
    const selectorLG = this.get('selectorLG');
    const selectorXL = this.get('selectorXL');

    this.set('alt', altText);

    if (Ember.isArray(medias)) {
      medias.forEach((media) => {
        switch (media.mediaFormat) {
          case selectorXXS + retinaPostfix:
            this.set('_urls.screen_xxs', media.url);
            break;
          case selectorXS + retinaPostfix:
            this.set('_urls.screen_xs', media.url);
            break;
          case selectorSM + retinaPostfix:
            this.set('_urls.screen_sm', media.url);
            break;
          case selectorMD + retinaPostfix:
            this.set('_urls.screen_md', media.url);
            break;
          case selectorLG + retinaPostfix:
            this.set('_urls.screen_lg', media.url);
            break;
          case selectorXL + retinaPostfix:
            this.set('_urls.screen_xl', media.url);
            break;
          default:
            break;
        }
      });
    }

    this._updateUrl();
  },
  _updateUrl() {
    const viewport = this.get('viewport');
    const urls = this.get('_urls');

    this.set('src', urls[`screen_${viewport.getViewPort()}`]);
  },
  _debouncedUpdateUrl() {
    Ember.run.debounce(this, this._updateUrl, 200);
  }

  // Actions
});
