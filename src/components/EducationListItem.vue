<template>
  <div class='education-list-item my-3'>

    <!-- Show mode -->
    <b-card 
      bg-variant='white'
      class='mx-lg-5 shadow'
      v-show='!isEditing'
    >
      <b-card-body>
        <b-card-title>{{ educationItem.educationTitle }}</b-card-title>
        <b-card-sub-title class='mb-2'>{{ educationItem.educationDuration }}</b-card-sub-title>
        <b-card-text>{{ educationItem.educationDescription }}</b-card-text>
      </b-card-body>

      <!-- Edit and delete buttons -->
      <div class='my-3'>

        <span class='pr-3'>
          <b-icon icon='pencil-square' v-on:click='showForm'></b-icon>
        </span>

        <span class='pl-3'>
          <b-icon icon='dash-square' variant='danger' v-on:click='deleteItem(educationItem)'> </b-icon>
        </span>

      </div>

      <!-- Complete and imcomplete state toggle -->
      <div class='d-flex justify-content-end'>

        <div  v-show='!isEditing && educationItem.educationCompleted' v-on:click='imcompleteItem(educationItem)'>
          <b-icon icon='circle-fill' variant='success'></b-icon>
        </div>

        <div v-show='!isEditing && !educationItem.educationCompleted' v-on:click='completeItem(educationItem)'>
          <b-icon icon='circle-fill' variant='danger'></b-icon>
        </div>
        
      </div>

    </b-card>

    <!-- Edition mode -->
    <b-card 
      bg-variant='light' 
      class='mx-lg-5 shadow' 
      v-show='isEditing'>

      <!-- Form -->
      <b-form-group
          label-cols-lg='3'
          v-bind:label='this.content.educationLabel[this.language]'
          label-size='lg'
          label-class='font-weight-bold pt-0'
          class='mb-0'
      >

          <b-form-group
            label-cols-sm='3'
            v-bind:label='this.content.educationTitle[this.language]'
            label-align-sm='right'
            label-for='educationTitle'
            v-bind:valid-feedback='this.content.globalThanksA[this.language]'
            v-bind:invalid-feedback='educationTitleInvalid'
            v-bind:state='educationTitleState'
          >

            <b-form-input 
              id='educationTitle' 
              v-model='educationItem.educationTitle' 
              type='text' 
              v-bind:placeholder='this.content.educationTitlePlaceholder[this.language]'
            />

          </b-form-group>

          <b-form-group
            label-cols-sm='3'
            v-bind:label='this.content.educationDuration[this.language]'
            label-align-sm='right'
            label-for='educationDuration'
            v-bind:valid-feedback='this.content.globalThanksB[this.language]'
            v-bind:invalid-feedback='educationDurationInvalid'
            v-bind:state='educationDurationState'
          >

            <b-form-input 
              id='educationDuration' 
              v-model='educationItem.educationDuration' 
              type='text' 
              v-bind:placeholder='this.content.educationDurationPlaceholder[this.language]'
            />

          </b-form-group>

          <b-form-group
            label-cols-sm='3'
            v-bind:label='this.content.educationDescription[this.language]'
            label-align-sm='right'
            label-for='educationDescription'
            v-bind:valid-feedback='this.content.globalThanksC[this.language]'
            v-bind:invalid-feedback='educationDescriptionInvalid'
            v-bind:state='educationDescriptionState'
          >

            <b-form-textarea 
              id='educationDescription' 
              v-model='educationItem.educationDescription' 
              type='text'  
              rows='3'
              v-bind:placeholder='this.content.educationDescriptionPlaceholder[this.language]'
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
  name:'EducationListItem',
  //Properties received from parent
  props: ['educationItem','content','language'],
  data() {
    return {
      isEditing: false
    };
  },
  computed: {
    educationTitleState() {
      return this.educationItem.educationTitle.length > 5
    },
    educationDurationState() {
    return this.educationItem.educationDuration.length > 4
    },    
    educationDescriptionState() {
    return this.educationItem.educationDescription.length > 3
    },
    educationTitleInvalid() {
    if (this.educationItem.educationTitle.length > 0) {
        return this.content.educationTitleInvalidVoid[this.language]
    } 
        return this.content.educationTitleInvalid[this.language]
    },
    educationDurationInvalid() {
    if (this.educationItem.educationDuration.length > 0) {
        return this.content.educationDurationInvalidVoid[this.language]
    }
        return this.content.educationDurationInvalid[this.language]
    },
    educationDescriptionInvalid() {
    if (this.educationItem.educationDescription.length > 0) {
        return this.content.educationDescriptionInvalidVoid[this.language]
    }
        return this.content.educationDescriptionInvalid[this.language]
    }
    
  }, 
  methods: {
    showForm() {
      this.isEditing = true;
    },
    hideForm() {
      this.isEditing = false;
    },
    deleteItem(educationItem) {
      this.$emit('delete-item', educationItem);
    },
    completeItem(educationItem) {
      this.$emit('complete-item', educationItem);
    },
    imcompleteItem(educationItem) {
      this.$emit('imcomplete-item', educationItem);
    }
  }
};
</script>

<style scoped>
.b-icon {
  font-size:1.5rem
}
</style>
  

