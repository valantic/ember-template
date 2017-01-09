window.deprecationWorkflow = window.deprecationWorkflow || {};
window.deprecationWorkflow.config = {
  workflow: [
    { handler: 'silence', matchId: 'ember-runtime.enumerable-contains' } // The Warning comes from the freestyle-collection.js (Ember-freestyle) and is reported here https://github.com/chrislopresto/ember-freestyle/issues/91
  ]
};
