<template>
  <div class='experience my-5'>

    <b-card 
      bg-variant='light'
      class='mx-lg-5 shadow' 
      v-bind:title='this.content.experienceCardTitle[this.language]'
      v-bind:sub-title='this.content.experienceCardSubTitle[this.language]'
    >
      <!-- Bind elements -->
      <ExperienceList 
        v-bind:experience-items = 'experienceItems'
        v-bind:language='language' 
        v-bind:content='content' 
      />
      <!-- Activate when DOM element is triggered -->
      <ExperienceCreate 
        v-on:create-experience-item = 'createExperienceItem'
        v-bind:language='language' 
        v-bind:content='content' 
      />
    </b-card>
    
  </div>
</template>

<script>
import ExperienceList from '@/components/ExperienceList.vue'
import ExperienceCreate from '@/components/ExperienceCreate.vue'

export default {
  name: 'Experience',
  props: ['content','language'],
  components: {
    ExperienceList,
    ExperienceCreate
  },
  data() {
    return {
      experienceItems: [
        {
          experienceId: 0,
          experienceTitle: this.content.experienceTitlePlaceholder[this.language],
          experienceSubTitle: this.content.experienceSubTitlePlaceholder[this.language],
          experienceDuration: this.content.experienceDurationPlaceholder[this.language],
          experienceDescription: this.content.experienceDescriptionPlaceholder[this.language],
          experienceCompleted: false
        }
      ]
    };
  },
  methods: {
    createExperienceItem(experienceItem){
        this.experienceItems.push(experienceItem);
    }
  }
}
</script>

<style>
</style>