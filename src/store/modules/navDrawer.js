const state = {
  opened: window.innerWidth > 768,
};

const getters = {
  isOpened: (s) => s.opened,
};

const mutations = {
  mutateOpened: (s, payload) => {
    s.opened = payload;
  },
};

const actions = {
  toggleOpened: (context) => {
    context.commit('mutateOpened', !context.getters.isOpened);
  },
  setOpened: (context, payload) => {
    if (typeof payload !== 'boolean') {
      console.error('Invalid Payload type for "setOpened" method');
      return;
    }
    context.commit('mutateOpened', payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
