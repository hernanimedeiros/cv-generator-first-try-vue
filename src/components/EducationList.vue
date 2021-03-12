<template>
  <div class='education-list'>

      <p>
        <!-- Filter and store in a array the items completed-->
        {{ this.content.globalCompleted[this.language] }}
        {{ educationItems.filter(educationItem => { return educationItem.educationCompleted === true }).length }}
        <!-- Filter and store in a array the items not completed-->
        {{ this.content.globalNotCompleted[this.language] }}
        {{ educationItems.filter(educationItem => { return educationItem.educationCompleted === false }).length }}
      </p>
      <EducationListItem
        v-on:delete-item='deleteItem' 
        v-on:complete-item='completeItem'
        v-on:imcomplete-item='imcompleteItem'  
        v-for='(educationItem,index) in educationItems' 
        v-bind:education-item='educationItem' 
        v-bind:key='index'
        v-bind:language='language' 
        v-bind:content='content'
      />
  </div>
  
</template>

<script>
import EducationListItem from '@/components/EducationListItem.vue'

export default {
  name:'EducationList',
  //Properties received from parent
  props: ['educationItems','content','language'],
  components: {
    EducationListItem
  },
  methods: {
    deleteItem(educationItem) {
      //Var sore index of element to be deleted
      const itemIndex = this.educationItems.indexOf(educationItem);
      //Method splice modify content of an arraylist, in this case remove 1 element of index itemIndex 
      this.educationItems.splice(itemIndex, 1);
      this.$store.commit('education/set', this.educationItems);
    },
    completeItem(educationItem) {
      //Select element to be mark as completed
      const itemIndex = this.educationItems.indexOf(educationItem);
      educationItem.educationId = itemIndex;
      //Modify state of item
      this.educationItems[itemIndex].educationCompleted = true;
      this.$store.commit('education/set', this.educationItems);
    },
    imcompleteItem(educationItem) {
      //Select element to be mark as completed
      const itemIndex = this.educationItems.indexOf(educationItem);
      //Modify state of item
      this.educationItems[itemIndex].educationCompleted = false;
      this.$store.commit('education/set', this.educationItems.filter(educationItem => { return educationItem.educationCompleted === true }));
    }
  } 
};
</script>

<style>

</style>