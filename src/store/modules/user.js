import Axios from 'axios'

export default {
  state: {
    users: []
  },
  mutations: {
    addUsers: (state, payload) => {
      state.users.push(payload)
    },
  },
  actions: {
    saveUsers: async (context, payload) => {
        let {
          data
        } = await Axios.post('http://5c1fddedf3e8d200133b659d.mockapi.io/users', {
          username: payload.username,
          password: payload.password
        });
        context.commit('addUsers', payload);
        context.commit('setLoading', true);
      },
  },
  getters: {}
}
