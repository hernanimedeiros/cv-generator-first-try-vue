<template>
  <div class='preview my-5'>
      <!-- Complete and imcomplete state toggle -->
      <div class='d-flex justify-content-center'>
        {{'DATA '}}
        <div  v-on:click='showPreview'>
          <b-icon icon='circle-fill' variant='success'></b-icon>
        </div>

        <div v-on:click='hidePreview'>
          <b-icon icon='circle-fill' variant='danger'></b-icon>
        </div>

      </div>

      <b-card bg-variant='dark' class='mx-lg-5 mt-5 shadow text-white' title='Resultados:' sub-title='JSON' v-show='!isPreview'>
        <b-col cols='6' class='mx-auto'>
            <b-card bg-variant='light' class='mx-auto text-white'>
            <pre>{{ "JSON DATA" }}</pre>
          </b-card>
        </b-col>
      </b-card>


      <b-card bg-variant='dark' class='mx-lg-5 mt-5 shadow text-white' title='Resultados:' sub-title='JSON' v-show='isPreview'>
        <b-col cols='6' class='mx-auto'>

          <p class='mt-3'>Preferências</p>
          <b-card bg-variant='light' class='mx-auto text-white'>
          <pre>{{ preferencesUpdate }}</pre>
          </b-card>

          <p class='mt-3'>Perfil</p>
          <b-card bg-variant='light' class='mx-auto text-white'>
          <pre>{{ profileItemsUpdate }}</pre>
          </b-card>

          <p class='mt-3'>Competências</p>
          <b-card bg-variant='light' class='mx-auto text-white'>
          <pre>{{ skillItemsUpdate }}</pre>
          </b-card>

          <p class='mt-3'>Experiência</p>
          <b-card bg-variant='light' class='mx-auto text-white'>
          <pre>{{ experienceItemsUpdate }}</pre>
          </b-card>

          <p class='mt-3'>Educação</p>
          <b-card bg-variant='light' class='mx-auto text-white'>
          <pre>{{ educationItemsUpdate }}</pre>
          </b-card>

          <p class='mt-3'>Formações</p>
          <b-card bg-variant='light' class='mx-auto text-white'>
          <pre>{{ courseItemsUpdate }}</pre>
          </b-card>

        </b-col>
      </b-card>
  </div>
</template>

<script>
//import Experience from '@/components/Experience.vue'

export default {
  name: 'Preview',
  data() {
    return {
      isPreview: false
    };
  },
  computed: {
    preferencesUpdate(){
      return this.$store.state.preferences.info
    },
    profileItemsUpdate(){
      return this.$store.state.profile.info
    },
    skillItemsUpdate(){
      return this.$store.state.skill.info
    },
    experienceItemsUpdate(){
      return this.$store.state.experience.info
    },
    educationItemsUpdate(){
      return this.$store.state.education.info
    },
    courseItemsUpdate(){
      return this.$store.state.course.info
    }
  },
  methods: {
    showPreview() {
      this.isPreview = true;
    },
    hidePreview() {
      this.isPreview = false;
    }
  }
}
</script>

<style>
</style>