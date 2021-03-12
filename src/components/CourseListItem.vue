<template>
  <div class='course-list-item my-3'>

    <!-- Show mode -->
    <b-card bg-variant='white' class='mx-lg-5 shadow' v-show='!isEditing'>
      <b-card-body>
        <b-card-title>{{ courseItem.courseTitle }}</b-card-title>
        <b-card-sub-title class='mb-2'>{{ courseItem.courseDuration }}</b-card-sub-title>
        <b-card-text>{{ courseItem.courseDescription }}</b-card-text>
      </b-card-body>

      <!-- Edit and delete buttons -->
      <div class='my-3'>

        <span class='pr-3'>
          <b-icon icon='pencil-square' v-on:click='showForm'></b-icon>
        </span>

        <span class='pl-3'>
          <b-icon icon='dash-square' variant='danger' v-on:click='deleteItem(courseItem)'> </b-icon>
        </span>

      </div>

      <!-- Complete and imcomplete state toggle -->
      <div class='d-flex justify-content-end'>

        <div  v-show='!isEditing && courseItem.courseCompleted' v-on:click='imcompleteItem(courseItem)'>
          <b-icon icon='circle-fill' variant='success'></b-icon>
        </div>

        <div v-show='!isEditing && !courseItem.courseCompleted' v-on:click='completeItem(courseItem)'>
          <b-icon icon='circle-fill' variant='danger'></b-icon>
        </div>

      </div>

    </b-card>

    <!-- Edition mode -->
    <b-card bg-variant='light' class='mx-lg-5 shadow' v-show='isEditing'>

      <!-- Form -->
      <b-form-group
          label-cols-lg='3'
          v-bind:label='this.content.courseLabel[this.language]'
          label-size='lg'
          label-class='font-weight-bold pt-0'
          class='mb-0'
      >
          <b-form-group
            label-cols-sm='3'
            v-bind:label='this.content.courseTitle[this.language]'
            label-align-sm='right'
            label-for='courseTitle'
            v-bind:valid-feedback='this.content.globalThanksA[this.language]'
            v-bind:invalid-feedback='courseTitleInvalid'
            v-bind:state='courseTitleState'
          >

            <b-form-input 
              id='courseTitle' 
              v-model='courseItem.courseTitle' 
              type='text' 
              v-bind:placeholder='this.content.courseTitlePlaceholder[this.language]'
            />

          </b-form-group>

          <b-form-group
            label-cols-sm='3'
            v-bind:label='this.content.courseDuration[this.language]'
            label-align-sm='right'
            label-for='courseDuration'
            v-bind:valid-feedback='this.content.globalThanksB[this.language]'
            v-bind:invalid-feedback='courseDurationInvalid'
            v-bind:state='courseDurationState'
          >

            <b-form-input 
              id='courseDuration'
              v-model='courseItem.courseDuration' 
              type='text' 
              v-bind:placeholder='this.content.courseDurationPlaceholder[this.language]'
            />

          </b-form-group>

          <b-form-group
            label-cols-sm='3'
            v-bind:label='this.content.courseDescription[this.language]'
            label-align-sm='right'
            label-for='courseDescription'
            v-bind:valid-feedback='this.content.globalThanksC[this.language]'
            v-bind:invalid-feedback='courseDescriptionInvalid'
            v-bind:state='courseDescriptionState'
          >

            <b-form-textarea 
              id='courseDescription'
              v-model='courseItem.courseDescription' 
              type='textarea' 
              rows='3' 
              v-bind:placeholder='this.content.courseDescriptionPlaceholder[this.language]'
            />
            
          </b-form-group>

      </b-form-group>

      <div>
        <b-icon icon='check-square' variant='success' v-on:click='hideForm' />
      </div>

    </b-card>

  </div>
</template>

<script>
export default {
  name:'CourseListItem',
  //Properties received from parent
  props: ['courseItem','content','language'],
  data() {
    return {
      isEditing: false
    };
  },
  computed: {
    courseTitleState() {
      return this.courseItem.courseTitle.length > 5
    },
    courseDurationState() {
      return this.courseItem.courseDuration.length > 2
    },    
    courseDescriptionState() {
      return this.courseItem.courseDescription.length > 3
    },
    courseTitleInvalid() {
      if (this.courseItem.courseTitle.length > 0) {
          return this.content.courseTitleInvalidVoid[this.language]
      } 
          return this.content.courseTitleInvalid[this.language]
      },
    courseDurationInvalid() {
      if (this.courseItem.courseDuration.length > 0) {
          return this.content.courseDurationInvalidVoid[this.language]
      } 
          return this.content.courseDurationInvalid[this.language]
      },
    courseDescriptionInvalid() {
      if (this.courseItem.courseDescription.length > 0) {
          return this.content.courseDescriptionInvalidVoid[this.language]
      } 
          return this.content.courseDescriptionInvalid[this.language]
      }
    
  }, 
  methods: {
    showForm() {
      this.isEditing = true;
    },
    hideForm() {
      this.isEditing = false;
    },
    deleteItem(courseItem) {
      this.$emit('delete-item', courseItem);
    },
    completeItem(courseItem) {
      this.$emit('complete-item', courseItem);
    },
    imcompleteItem(courseItem) {
      this.$emit('imcomplete-item', courseItem);
    }
  }
};
</script>

<style scoped>
  .b-icon {
    font-size:1.5rem
  }
</style>