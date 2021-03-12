<template>
  <div class='profile my-5'>

    <b-card 
      bg-variant='light'
      class='mx-lg-5 shadow'
      v-bind:title='this.content.profileCardTitle[this.language]'
      v-bind:sub-title='this.content.profileCardSubTitle[this.language]'
    >
      <!-- Bind elements -->
      <ProfileList 
        v-bind:profile-items = 'profileItems' 
        v-bind:language='language' 
        v-bind:content='content'
      />
    </b-card>

  </div>
</template>

<script>
import ProfileList from '@/components/ProfileList.vue'

export default {
  name: 'Profile',
  props: ['content','language'],
  components: {
    ProfileList
  },
  data() {
    return {
      profileItems: [
        {
          profilePhoto: "",
          profileFirstName: this.content.profileFirstNameDefault[this.language],
          profileLastName: this.content.profileLastNameDefault[this.language],
          profilePosition: this.content.profilePositionDefault[this.language],
          profilePhone: this.content.profilePhoneDefault[this.language],
          profileEmail: this.content.profileEmailDefault[this.language],
          profileAddress: this.content.profileAddressDefault[this.language],
          profileAbout: this.content.profileAboutDefault[this.language],
          profileStrength: this.content.profileStrengthDefault[this.language],
          profileSocialNetwork: this.content.profileSocialNetworkDefault[this.language],
          profileHobbie: this.content.profileHobbieDefault[this.language],
          profileCompleted: false
        }
      ]
    };
  }
}
</script>

<style>
</style>