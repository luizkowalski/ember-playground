import Ember from 'ember';

export function activeClass([index]/*, hash*/) {
  return index === 0 ? 'active' : '';
}

export default Ember.Helper.helper(activeClass);
