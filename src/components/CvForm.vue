<template>
    <div class='cv-form'>
        <Profile v-bind:language='language' v-bind:content='content' />
        <Skill v-bind:language='language' v-bind:content='content' />
        <Experience v-bind:language='language' v-bind:content='content' />
        <Education v-bind:language='language' v-bind:content='content' />
        <Course v-bind:language='language' v-bind:content='content' />
    </div>

</template>

<script>
import Profile from '@/components/Profile.vue'
import Skill from '@/components/Skill.vue'
import Experience from '@/components/Experience.vue'
import Education from '@/components/Education.vue'
import Course from '@/components/Course.vue'

export default {
  name: 'CvForm',
  props: ['content','language'],
  components: {
    Profile,
    Skill,
    Experience,
    Education,
    Course
  }
}
</script>

<style>
</style>