import Vue from 'vue'
import Vuex from 'vuex'
import course from './modules/course'
import education from './modules/education'
import experience from './modules/experience'
import preferences from './modules/preferences'
import profile from './modules/profile'
import skill from './modules/skill'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    course,
    education,
    experience,
    preferences,
    profile,
    skill
  }
})
