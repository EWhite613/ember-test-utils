/**
 * Dummy my-greeting component
 */
import Component from '@ember/component'

import computed from 'ember-macro-helpers/computed'
import layout from './template'

export default Component.extend({
  // == Dependencies ==========================================================

  // == Properties ============================================================

  layout,
  defaultSalutation: 'Hello',

  // == Computed Properties ===================================================

  greeting: computed('salutation', 'name', function (salutation = this.defaultSalutation, name) {
    return `${salutation}, ${name}`
  }).readOnly(),

  // == Functions =============================================================

  // == Events ================================================================

  // == Actions ===============================================================

  actions: {}
})
