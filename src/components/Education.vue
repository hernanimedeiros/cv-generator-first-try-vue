<template>
  <div class='education my-5'>

    <b-card
      bg-variant='light' 
      class='mx-lg-5 shadow' 
      v-bind:title='this.content.educationCardTitle[this.language]'
      v-bind:sub-title='this.content.educationCardSubTitle[this.language]'
    >
      <!-- Bind elements -->
      <EducationList 
        v-bind:education-items = 'educationItems'
        v-bind:language='language' 
        v-bind:content='content' 
      />
      <!-- Activate when DOM element is triggered -->
      <EducationCreate 
        v-on:create-education-item = 'createEducationItem'
        v-bind:language='language' 
        v-bind:content='content' 
      />
    </b-card>

  </div>
</template>

<script>
import EducationList from '@/components/EducationList.vue'
import EducationCreate from '@/components/EducationCreate.vue'

export default {
  name: 'Education',
  props: ['content','language'],
  components: {
    EducationList,
    EducationCreate
  },
  data() {
    return {
      educationItems: [
        {
          educationId : 0,
          educationTitle: this.content.educationTitlePlaceholder[this.language],
          educationDuration: this.content.educationDurationPlaceholder[this.language],
          educationDescription: this.content.educationDescriptionPlaceholder[this.language],
          educationCompleted: false
        }
      ]
    };
  },
  methods: {
    createEducationItem(educationItem){
        this.educationItems.push(educationItem);
    }
  }
}
</script>

<style>
</style>