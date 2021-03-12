<template>
  <div class='experience-list'>

      
      <p>
        <!-- Filter and store in a array the items completed-->
        {{ this.content.globalCompleted[this.language] }}
        {{ experienceItems.filter(experienceItem => { return experienceItem.experienceCompleted === true }).length }}
        <!-- Filter and store in a array the items not completed-->
        {{ this.content.globalNotCompleted[this.language] }}
        {{ experienceItems.filter(experienceItem => { return experienceItem.experienceCompleted === false }).length }}
      </p>
      <ExperienceListItem
        v-on:delete-item='deleteItem' 
        v-on:complete-item='completeItem'
        v-on:imcomplete-item='imcompleteItem'  
        v-for='(experienceItem,index) in experienceItems' 
        v-bind:experience-item='experienceItem' 
        v-bind:key='index'
        v-bind:language='language' 
        v-bind:content='content'
      />
  </div>
  
</template>

<script>
import ExperienceListItem from '@/components/ExperienceListItem.vue'

export default {
  name:'ExperienceList',
  //Properties received from parent
  props: ['experienceItems','content','language'],
  components: {
    ExperienceListItem
  },
  methods: {
    deleteItem(experienceItem) {
      //Var sore index of element to be deleted
      const itemIndex = this.experienceItems.indexOf(experienceItem);
      //Method splice modify content of an arraylist, in this case remove 1 element of index itemIndex 
      this.experienceItems.splice(itemIndex, 1);
      this.$store.commit('experience/set', this.experienceItems)
    },
    completeItem(experienceItem) {
      //Select element to be mark as completed
      const itemIndex = this.experienceItems.indexOf(experienceItem);
      experienceItem.experienceId = itemIndex;
      //Modify state of item
      this.experienceItems[itemIndex].experienceCompleted = true;
      this.$store.commit('experience/set', this.experienceItems);
    },
    imcompleteItem(experienceItem) {
      //Select element to be mark as completed
      const itemIndex = this.experienceItems.indexOf(experienceItem);
      //Modify state of item
      this.experienceItems[itemIndex].experienceCompleted = false;
      this.$store.commit('experience/set', this.experienceItems.filter(experienceItem => { return experienceItem.experienceCompleted === true }));
    }
  } 
};
</script>

<style>

</style>