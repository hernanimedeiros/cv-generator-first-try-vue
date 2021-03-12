<template>
  <div class='skill-list-item my-3'>

    <!-- Show mode -->
    <b-card
      bg-variant='white'
      class='mx-lg-5 shadow'
      v-show='!isEditing'
    >
      <b-card-body>
        <b-card-title>{{ skillItem.skillTitle }}</b-card-title>
        <b-card-sub-title class='mb-2'>{{ skillItem.skillDuration }}</b-card-sub-title>
        <b-card-text>{{ skillItem.skillDescription }}</b-card-text>
      </b-card-body>

      <!-- Edit and delete buttons -->
      <div class='my-3'>

        <span class='pr-3'>
          <b-icon icon='pencil-square' v-on:click='showForm'></b-icon>
        </span>

        <span class='pl-3'>
          <b-icon icon='dash-square' variant='danger' v-on:click='deleteItem(skillItem)'> </b-icon>
        </span>

      </div>

      <!-- Complete and imcomplete state toggle -->
      <div class='d-flex justify-content-end'>

        <div  v-show='!isEditing && skillItem.skillCompleted' v-on:click='imcompleteItem(skillItem)'>
          <b-icon icon='circle-fill' variant='success'></b-icon>
        </div>

        <div v-show='!isEditing && !skillItem.skillCompleted' v-on:click='completeItem(skillItem)'>
          <b-icon icon='circle-fill' variant='danger'></b-icon>
        </div>

      </div>

    </b-card>

    <!-- Edition mode -->
    <b-card bg-variant='light' class='mx-lg-5 shadow' v-show='isEditing'>

      <!-- Form -->
      <b-form-group
        label-cols-lg='3'
        v-bind:label='this.content.skillLabel[this.language]'
        label-size='lg'
        label-class='font-weight-bold pt-0'
        class='mb-0'
      >

        <b-form-group
          label-cols-sm='3'
          v-bind:label='this.content.skillTitle[this.language]'
          label-align-sm='right'
          label-for='skillTitle'
          v-bind:valid-feedback='this.content.globalThanksA[this.language]'
          v-bind:invalid-feedback='skillTitleInvalid'
          v-bind:state='skillTitleState'
        >

          <b-form-input
            id='skillTitle' 
            v-model='skillItem.skillTitle' 
            type='text' 
            v-bind:placeholder='this.content.skillTitlePlaceholder[this.language]'
          />
          
        </b-form-group>

        <b-form-group
          label-cols-sm='3'
          v-bind:label='this.content.skillDescription[this.language]'
          label-align-sm='right'
          label-for='skillDescription'
          v-bind:valid-feedback='this.content.globalThanksC[this.language]'
          v-bind:invalid-feedback='skillDescriptionInvalid'
          v-bind:state='skillDescriptionState'
        >

          <b-form-textarea 
            id='skillDescription' 
            v-model='skillItem.skillDescription' 
            type='text'  
            rows='3' 
            v-bind:placeholder='this.content.skillDescriptionPlaceholder[this.language]'
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
  name:'SkillListItem',
  //Properties received from parent
  props: ['skillItem','content','language'],
  data() {
    return {
      isEditing: false
    };
  },
  computed: {
    skillTitleState() {
      return this.skillItem.skillTitle.length > 5
    }, 
    skillDescriptionState() {
    return this.skillItem.skillDescription.length > 5
    },
    skillTitleInvalid() {
    if (this.skillItem.skillTitle.length > 0) {
        return this.content.skillTitleInvalidVoid[this.language]
    } 
        return this.content.skillTitleInvalid[this.language]
    },
    skillDescriptionInvalid() {
    if (this.skillItem.skillDescription.length > 0) {
        return this.content.skillDescriptionInvalidVoid[this.language]
    }
        return this.content.skillDescriptionInvalid[this.language]
    }
    
  }, 
  methods: {
    showForm() {
      this.isEditing = true;
    },
    hideForm() {
      this.isEditing = false;
    },
    deleteItem(skillItem) {
      this.$emit('delete-item', skillItem);
    },
    completeItem(skillItem) {
      this.$emit('complete-item', skillItem);
    },
    imcompleteItem(skillItem) {
      this.$emit('imcomplete-item', skillItem);
    }
  }
};
</script>

<style scoped>
.b-icon {
  font-size:1.5rem
}
</style>
  

