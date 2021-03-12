<template>
      <LanguageSetSelection
      v-on:change-language='changeLanguage'
      v-bind:language='language' 
      />   

</template>

<script>
import LanguageSetSelection from '@/components/LanguageSetSelection.vue'
export default {
    name:'LanguageSet',
    props: ['preferences'],
    components: {
        LanguageSetSelection
    },
    data() {
        return {
            language: this.language,
        };
    },
    //Methods for actions
    methods: {
        changeLanguage(language) {
            this.preferences[0].language=language;
            this.$store.commit('preferences/set', this.preferences);
            return language;
        }
  }
};
</script>