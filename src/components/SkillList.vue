<template>
  <div class='skill-list'>

      
      <p>
        <!-- Filter and store in a array the items completed-->
        {{ this.content.globalCompleted[this.language] }}
        {{ skillItems.filter(skillItem => { return skillItem.skillCompleted === true }).length }}
        <!-- Filter and store in a array the items not completed-->
        {{ this.content.globalNotCompleted[this.language] }}
        {{ skillItems.filter(skillItem => { return skillItem.skillCompleted === false }).length }}
      </p>
      <SkillListItem
        v-on:delete-item='deleteItem' 
        v-on:complete-item='completeItem'
        v-on:imcomplete-item='imcompleteItem'  
        v-for='(skillItem,index) in skillItems' 
        v-bind:skill-item='skillItem' 
        v-bind:key='index'
        v-bind:language='language' 
        v-bind:content='content'
      />
  </div>
  
</template>

<script>
import SkillListItem from '@/components/SkillListItem.vue'

export default {
  name:'SkillList',
  //Properties received from parent
  props: ['skillItems','content','language'],
  components: {
    SkillListItem
  },
  methods: {
    deleteItem(skillItem) {
      //Var sore index of element to be deleted
      const itemIndex = this.skillItems.indexOf(skillItem);
      //Method splice modify content of an arraylist, in this case remove 1 element of index itemIndex 
      this.skillItems.splice(itemIndex, 1);
      this.$store.commit('skill/set', this.skillItems);
    },
    completeItem(skillItem) {
      //Select element to be mark as completed
      const itemIndex = this.skillItems.indexOf(skillItem);
      skillItem.skillId = itemIndex;
      //Modify state of item
      this.skillItems[itemIndex].skillCompleted = true;
      this.$store.commit('skill/set', this.skillItems);
    },
    imcompleteItem(skillItem) {
      //Select element to be mark as completed
      const itemIndex = this.skillItems.indexOf(skillItem);
      //Modify state of item
      this.skillItems[itemIndex].skillCompleted = false;
      this.$store.commit('skill/set', this.skillItems.filter(skillItem => { return skillItem.skillCompleted === true }));
    }
  } 
};
</script>

<style>

</style>