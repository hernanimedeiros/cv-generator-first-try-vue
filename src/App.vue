<template>
  <div id="app">
    <div id='nav' class='no-printme' >
      {{storeDefaultPreferences}}
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <!-- Component to change Language-->  
      <LanguageSet v-bind:preferences = "preferences"/>    
    </div>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import LanguageSet from '@/components/LanguageSet.vue'
export default {
  name: 'App',
  components: {
    LanguageSet
  },
  data() {
    //Default app settings
    return {
      preferences: [
        {
          language: 'pt',
          colorMode: 'light'
        }
      ]
    }
  },
  computed:{
    //Store default parameters
    storeDefaultPreferences() {
      this.$store.commit('preferences/set', this.preferences);
      return ''
    }
  }
}
</script>   

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  .printme {
    display: none;
  }

  @media print {
    .no-printme  {
      display: none;
    }

    .printme  {
      display: block;
    }
  }
</style>