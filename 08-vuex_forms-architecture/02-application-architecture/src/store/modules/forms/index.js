import { state } from '@/store/modules/forms/state';
import { getters } from '@/store/modules/forms/getters';
import { mutations } from '@/store/modules/forms/mutations';
import { actions } from '@/store/modules/forms/actions';

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
