import Ember from 'ember';

export default Ember.Service.extend({
  primaryColours: {
    dark: {
      name: '$color-primary-dark',
      base: '#9FC204'
    },
    light: {
      name: '$color-primary-light',
      base: '#54666F'
    }
  },
  statusColours: {
    success: {
      name: '$color-status-success',
      base: '#8DC63F'
    },
    failed: {
      name: '$color-status-failed',
      base: '#C60651'
    },
    warning: {
      name: '$color-status-warning',
      base: '#FFA500'
    }
  },
  grayColours: {
    black: {
      name: '$color-gray-black',
      base: '#000000'
    },
    dark: {
      name: '$color-gray-dark',
      base: '#444E58'
    },
    light: {
      name: '$color-gray-light',
      base: '#B1B3B6'
    },
    white: {
      name: '$color-gray-white',
      base: '#FFFFFF'
    },
    whiteOpacityHeavy: {
      name: '$color-gray-white-opacity-heavy',
      base: 'rgba(#FFFFFF, 0.75)'
    },
    whiteOpacityLight: {
      name: '$color-gray-white-opacity-light',
      base: 'rgba(#FFFFFF, 0.3)'
    }
  }
});
