<template>
  <div class='profile-list'>

      <ProfileListItem
        v-on:complete-item='completeItem'
        v-on:imcomplete-item='imcompleteItem'  
        v-for='(profileItem,index) in profileItems' 
        v-bind:profile-item='profileItem' 
        v-bind:key='index'
        v-bind:language='language' 
        v-bind:content='content'
      />
      
  </div>
  
</template>

<script>
import ProfileListItem from '@/components/ProfileListItem.vue'

export default {
  name:'ProfileList',
  //Properties received from parent
  props: ['profileItems','content','language'],
  components: {
    ProfileListItem
  },
  methods: {
    completeItem(profileItem) {
      //Select element to be mark as completed
      const itemIndex = this.profileItems.indexOf(profileItem);
      //Modify state of item
      this.profileItems[itemIndex].profileCompleted = true;
      this.$store.commit('profile/set', this.profileItems);
    },
    imcompleteItem(profileItem) {
      //Select element to be mark as completed
      const itemIndex = this.profileItems.indexOf(profileItem);
      //Modify state of item
      this.profileItems[itemIndex].profileCompleted = false;
      this.$store.commit('profile/set', this.profileItems.filter(profileItem => { return profileItem.profileCompleted === true }));
    }
  } 
};
</script>

<style>
</style>