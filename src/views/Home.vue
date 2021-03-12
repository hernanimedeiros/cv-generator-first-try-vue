<template>
  <div class='home'>
    <div class="no-printme">
      <!--<img alt="Vue logo" src="../assets/logo.png">-->
      <CvForm v-bind:language='checkLanguage' v-bind:content='content' />
      <Static v-bind:language='checkLanguage' v-bind:content='content' />
      
      <Preview />
      <Save />
      
      <Footer v-bind:language='checkLanguage' />
    </div>
    <div class='printme'>
      <Pdf v-bind:language='checkLanguage' v-bind:content='content' />
    </div>
  </div>

</template>

<script>
// @ is an alias to /src
import HomeJson from '@/home.json'
import CvForm from '@/components/CvForm.vue'
import Preview from '@/components/Preview.vue'
import Save from '@/components/Save.vue'
import Pdf from '@/components/Pdf.vue'
import Static from '@/components/Static.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    CvForm,
    Preview,
    Save,
    Pdf,
    Static,
    Footer
  },
  data() {
    //Default app settings
    return {
      content : HomeJson
    }
  },
  //Watchers
  computed: {
    checkLanguage(){
      //Check current language
      const preferences = this.$store.state.preferences.info;
      let currentLanguage = preferences[0].language;
      return currentLanguage;
    }
  }
}
</script>