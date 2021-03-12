<template>
  <div class='experience-list-item my-3'>

    <!-- Show mode -->
    <b-card 
      bg-variant='white'
      class='mx-lg-5 shadow'
      v-show='!isEditing'
    >
      <b-card-body>
        <b-card-title>{{ experienceItem.experienceTitle }}</b-card-title>
        <b-card-sub-title class='mb-2'> {{ experienceItem.experienceSubTitle }} </b-card-sub-title>
        <b-card-sub-title class='mb-2'> {{ experienceItem.experienceDuration }} </b-card-sub-title>
        <b-card-text>{{ experienceItem.experienceDescription }}</b-card-text>
      </b-card-body>

      <!-- Edit and delete buttons -->
      <div class='my-3'>

        <span class='pr-3'>
          <b-icon icon='pencil-square' v-on:click='showForm'></b-icon>
        </span>

        <span class='pl-3'>
          <b-icon icon='dash-square' variant='danger' v-on:click='deleteItem(experienceItem)'> </b-icon>
        </span>

      </div>

      <!-- Complete and imcomplete state toggle -->
      <div class='d-flex justify-content-end'>

        <div  v-show='!isEditing && experienceItem.experienceCompleted' v-on:click='imcompleteItem(experienceItem)'>
          <b-icon icon='circle-fill' variant='success'></b-icon>
        </div>

        <div v-show='!isEditing && !experienceItem.experienceCompleted' v-on:click='completeItem(experienceItem)'>
          <b-icon icon='circle-fill' variant='danger'></b-icon>
        </div>

      </div>

    </b-card>

    <!-- Edition mode -->
    <b-card bg-variant='light' class='mx-lg-5 shadow' v-show='isEditing'>

      <!-- Form -->
      <b-form-group
          label-cols-lg='3'
          v-bind:label='this.content.experienceLabel[this.language]'
          label-size='lg'
          label-class='font-weight-bold pt-0'
          class='mb-0'
      >

          <b-form-group
            label-cols-sm='3'
            v-bind:label='this.content.experienceTitle[this.language]'
            label-align-sm='right'
            label-for='experienceTitle'
            v-bind:valid-feedback='this.content.globalThanksA[this.language]'
            v-bind:invalid-feedback='experienceTitleInvalid'
            v-bind:state='experienceTitleState'
          >

            <b-form-input 
              id='experienceTitle' 
              v-model='experienceItem.experienceTitle' 
              type='text' 
              v-bind:placeholder='this.content.experienceTitlePlaceholder[this.language]'
            />

          </b-form-group>

          <b-form-group
            label-cols-sm='3'
            v-bind:label='this.content.experienceSubTitle[this.language]'
            label-align-sm='right'
            label-for='experienceSubTitle'
            v-bind:valid-feedback='this.content.globalThanksA[this.language]'
            v-bind:invalid-feedback='experienceSubTitleInvalid'
            v-bind:state='experienceSubTitleState'
          >

            <b-form-input 
              id='experienceTitle' 
              v-model='experienceItem.experienceSubTitle' 
              type='text' 
              v-bind:placeholder='this.content.experienceSubTitlePlaceholder[this.language]'
            />

          </b-form-group>

          <b-form-group
            label-cols-sm='3'
            v-bind:label='this.content.experienceDuration[this.language]'
            label-align-sm='right'
            label-for='experienceDuration'
            v-bind:valid-feedback='this.content.globalThanksB[this.language]'
            v-bind:invalid-feedback='experienceDurationInvalid'
            v-bind:state='experienceDurationState'
          >

            <b-form-input 
              id='experienceDuration' 
              v-model='experienceItem.experienceDuration' 
              type='text' 
              v-bind:placeholder='this.content.experienceDurationPlaceholder[this.language]'
            />

          </b-form-group>

          <b-form-group
            label-cols-sm='3'
            v-bind:label='this.content.experienceDescription[this.language]'
            label-align-sm='right'
            label-for='experienceDescription'
            v-bind:valid-feedback='this.content.globalThanksC[this.language]'
            v-bind:invalid-feedback='experienceDescriptionInvalid'
            v-bind:state='experienceDescriptionState'
          >

            <b-form-textarea 
              id='experienceDescription' 
              v-model='experienceItem.experienceDescription' 
              type='text' 
              rows='3' 
              v-bind:placeholder='this.content.experienceDescriptionPlaceholder[this.language]'
            />
            
          </b-form-group>

      </b-form-group>

      <div>
        <b-icon icon='check-square' variant='success' v-on:click='hideForm'></b-icon>
      </div>

    </b-card>

  </div>
</template>

<script>
export default {
  name:'ExperienceListItem',
  //Properties received from parent
  props: ['experienceItem','content','language'],
  data() {
    return {
      isEditing: false
    };
  },
  computed: {
    experienceTitleState() {
      return this.experienceItem.experienceTitle.length > 5
    },
    experienceSubTitleState() {
      return this.experienceItem.experienceTitle.length > 5
    },
    experienceDurationState() {
    return this.experienceItem.experienceDuration.length > 4
    },    
    experienceDescriptionState() {
    return this.experienceItem.experienceDescription.length > 3
    },
    experienceTitleInvalid() {
    if (this.experienceItem.experienceTitle.length > 0) {
        return this.content.experienceTitleInvalidVoid[this.language]
    } 
        return this.content.experienceTitleInvalid[this.language]
    },    
    experienceSubTitleInvalid() {
    if (this.experienceItem.experienceTitle.length > 0) {
        return this.content.experienceTitleInvalidVoid[this.language]
    } 
        return this.content.experienceTitleInvalid[this.language]
    },
    experienceDurationInvalid() {
    if (this.experienceItem.experienceDuration.length > 0) {
        return this.content.experienceDurationInvalidVoid[this.language]
    }
        return this.content.experienceDurationInvalid[this.language]
    },
    experienceDescriptionInvalid() {
    if (this.experienceItem.experienceDescription.length > 0) {
        return this.content.experienceDescriptionInvalidVoid[this.language]
    }
        return this.content.experienceDescriptionInvalid[this.language]
    }
    
  }, 
  methods: {
    showForm() {
      this.isEditing = true;
    },
    hideForm() {
      this.isEditing = false;
    },
    deleteItem(experienceItem) {
      this.$emit('delete-item', experienceItem);
    },
    completeItem(experienceItem) {
      this.$emit('complete-item', experienceItem);
    },
    //ERRO!
    imcompleteItem(experienceItem) {
      this.$emit('imcomplete-item', experienceItem);
    }
  }
};
</script>

<style scoped>
.b-icon {
  font-size:1.5rem
}
</style>
  

