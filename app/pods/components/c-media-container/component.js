import Ember from 'ember';

export default Ember.Component.extend({
  // Component setup
  classNames: ['c-media-container'],
  bemBlockName: 'c-media-container',

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
  altText: '',
  lazyLoading: true,
  imageXXS: Ember.computed(() => ({})), // {url, urlRetina}
  imageXS: Ember.computed(() => ({})),
  imageSM: Ember.computed(() => ({})),
  imageMD: Ember.computed(() => ({})),
  imageLG: Ember.computed(() => ({})),
  imageXL: Ember.computed(() => ({})),

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
      this.set('imageXL.url', 'http://via.placeholder.com/350x150?text=default');
      this.set('altText', 'Default image');
    } else {
      const altText = medias[0].altText ? medias[0].altText : 'default image';

      this._setMediaUrls(altText, medias);
    }
  },

  // Internal properties

  // Internal functions
  _setMediaUrls(altText, medias) {
    const retinaPostfix = 'Retina';
    const selectorXXS = this.get('selectorXXS');
    const selectorXS = this.get('selectorXS');
    const selectorSM = this.get('selectorSM');
    const selectorMD = this.get('selectorMD');
    const selectorLG = this.get('selectorLG');
    const selectorXL = this.get('selectorXL');

    this.set('altText', altText);

    if (Ember.isArray(medias)) {
      medias.forEach((media) => {
        switch (media.mediaFormat) {
          case selectorXXS + retinaPostfix:
            this.set('imageXXS.urlRetina', media.url);
            break;
          case selectorXXS:
            this.set('imageXXS.url', media.url);
            break;
          case selectorXS + retinaPostfix:
            this.set('imageXS.urlRetina', media.url);
            break;
          case selectorXS:
            this.set('imageXS.url', media.url);
            break;
          case selectorSM + retinaPostfix:
            this.set('imageSM.urlRetina', media.url);
            break;
          case selectorSM:
            this.set('imageSM.url', media.url);
            break;
          case selectorMD + retinaPostfix:
            this.set('imageMD.urlRetina', media.url);
            break;
          case selectorMD:
            this.set('imageMD.url', media.url);
            break;
          case selectorLG + retinaPostfix:
            this.set('imageLG.urlRetina', media.url);
            break;
          case selectorLG:
            this.set('imageLG.url', media.url);
            break;
          case selectorXL + retinaPostfix:
            this.set('imageXL.urlRetina', media.url);
            break;
          case selectorXL:
            this.set('imageXL.url', media.url);
            break;
          default:
            break;
        }
      });
    }
  }

  // Actions
});
