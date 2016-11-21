import Ember from 'ember';

const { Component } = Ember;

// Component is used to stop ember-cli-fastboot rendering content, which is only for a browser.
// Mostly this prevents to run jQuery, which isn't supported in ember-cli-fastboot
// Solution by: https://github.com/mitchlloyd/ember-islands/pull/28

// Changed fastboot check according to https://github.com/miguelcobain/ember-paper/pull/441/files
// Because fastboot.isFastboot is no longer working

export default Component.extend({
  tagName: '',
  isFastBoot: Ember.computed(() => {
    const fastBootIsRunning = !(typeof FastBoot === 'undefined');

    return fastBootIsRunning;
  })
});
