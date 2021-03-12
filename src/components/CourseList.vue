<template>
  <div class='course-list'>

      <p>
        <!-- Filter and store in a array the items completed-->
        {{this.content.globalCompleted[this.language]}}
        {{ courseItems.filter(courseItem => { return courseItem.courseCompleted === true }).length }}
        <!-- Filter and store in a array the items not completed-->
        {{this.content.globalNotCompleted[this.language]}}
        {{ courseItems.filter(courseItem => { return courseItem.courseCompleted === false }).length }}
      </p>
      <CourseListItem
        v-on:delete-item='deleteItem' 
        v-on:complete-item='completeItem'
        v-on:imcomplete-item='imcompleteItem'  
        v-for='(courseItem,index) in courseItems' 
        v-bind:course-item='courseItem' 
        v-bind:key='index'
        v-bind:language='language' 
        v-bind:content='content'
      />
  </div>
  
</template>

<script>
import CourseListItem from '@/components/CourseListItem.vue'

export default {
  name:'CourseList',
  //Properties received from parent
  props: ['courseItems','content','language'],
  components: {
    CourseListItem
  },
  methods: {
    deleteItem(courseItem) {
      //Var sore index of element to be deleted
      const itemIndex = this.courseItems.indexOf(courseItem);
      //Method splice modify content of an arraylist, in this case remove 1 element of index itemIndex 
      this.courseItems.splice(itemIndex, 1);
      this.$store.commit('course/set', this.courseItems);
    },
    completeItem(courseItem) {
      //Select element to be mark as completed
      const itemIndex = this.courseItems.indexOf(courseItem);
      courseItem.courseId = itemIndex;
      //Modify state of item
      this.courseItems[itemIndex].courseCompleted = true;
      this.$store.commit('course/set', this.courseItems);
    },
    imcompleteItem(courseItem) {
      //Select element to be mark as completed
      const itemIndex = this.courseItems.indexOf(courseItem);
      //Modify state of item
      this.courseItems[itemIndex].courseCompleted = false;
      this.$store.commit('course/set', this.courseItems.filter(courseItem => { return courseItem.courseCompleted === true }));
    }
  } 
};
</script>

<style>

</style>