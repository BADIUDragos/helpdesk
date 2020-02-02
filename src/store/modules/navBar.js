const state = {
  title: '',
};

const getters = {
  getTitle: (s) => s.title,
};

const mutations = {
  mutateTitle: (s, payload) => {
    s.title = payload;
  },
};

const actions = {
  setTitle: (context, payload) => {
    if (typeof payload !== 'string') {
      console.error('Invalid Payload type for "setTitle" method');
      return;
    }
    context.commit('mutateTitle', payload);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
