<template>
  <div class='skill my-5'>

    <b-card 
      bg-variant='light' 
      class='mx-lg-5 shadow' 
      v-bind:title='this.content.skillCardTitle[this.language]'
      v-bind:sub-title='this.content.skillCardSubTitle[this.language]'
    >
      <!-- Bind elements -->
      <SkillList 
        v-bind:skill-items = 'skillItems'
        v-bind:language='language' 
        v-bind:content='content' 
      />
      <!-- Activate when DOM element is triggered -->
      <SkillCreate
        v-on:create-skill-item = 'createSkillItem'
        v-bind:language='language' 
        v-bind:content='content' 
      />
    </b-card>

  </div>
</template>

<script>
import SkillList from '@/components/SkillList.vue'
import SkillCreate from '@/components/SkillCreate.vue'

export default {
  name: 'Skill',
  props: ['content','language'],
  components: {
    SkillList,
    SkillCreate
  },
  data() {
    return {
      skillItems: [
        {
          skillId: 0,
          skillTitle: this.content.skillTitlePlaceholder[this.language],
          skillDescription: this.content.skillDescriptionPlaceholder[this.language],
          skillCompleted: false
        }
      ]
    };
  },
  methods: {
    createSkillItem(skillItem){
        this.skillItems.push(skillItem);
    }
  }
}
</script>

<style>
</style>