<template>
  <div class='course my-5'>

    <b-card 
      bg-variant='light' 
      class='mx-lg-5 shadow' 
      v-bind:title='this.content.courseCardTitle[this.language]'
      v-bind:sub-title='this.content.courseCardSubTitle[this.language]'
    >
      <!-- Bind elements -->
      <CourseList 
        v-bind:course-items = 'courseItems'
        v-bind:language='language' 
        v-bind:content='content' 
      />
      <!-- Activate when DOM element is triggered -->
      <CourseCreate 
        v-on:create-course-item = 'createCourseItem'
        v-bind:language='language' 
        v-bind:content='content'
      />
    </b-card>
    
  </div>
</template>

<script>
import CourseList from '@/components/CourseList.vue'
import CourseCreate from '@/components/CourseCreate.vue'

export default {
  name: 'Course',
  props: ['content','language'],
  components: {
    CourseList,
    CourseCreate
  },
  data() {
    return {
      courseItems: [
        {
          courseId : 0,
          courseTitle: this.content.courseTitlePlaceholder[this.language],
          courseDuration: this.content.courseDurationPlaceholder[this.language],
          courseDescription: this.content.courseDescriptionPlaceholder[this.language],
          courseCompleted: false
        }
      ]
    };
  },
  methods: {
    createCourseItem(courseItem){
      this.courseItems.push(courseItem);
    }
  }
}
</script>

<style>
</style>