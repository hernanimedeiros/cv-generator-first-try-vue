<template>
  <div class='profile-list-item my-3'>

    <!-- Show mode -->
    <b-card 
      bg-variant='white' 
      class='mx-lg-5 shadow' 
      v-show='!isEditing'
    >

      <b-card-body>

        <!-- Photo load mode -->
        <b-avatar 
          class='my-3' 
          v-bind:src="require('../assets/profile_photo.png')"  
          size='170px' 
          v-show='!profilePhoto'
        />
        <!-- Photo loaded mode -->
        <b-avatar 
          class='my-3'
          v-bind:src='profilePhotoUrl' 
          size='170px'
          v-show='profilePhoto'
        />
        
        <b-card-title>{{ profileItem.profileFirstName }} {{ profileItem.profileLastName }} ({{ profileItem.profilePosition }})</b-card-title>
        <b-card-sub-title class='mb-2'>{{ profileItem.profilePhone}} | {{ profileItem.profileEmail}}</b-card-sub-title>
        <b-card-text>{{ profileItem.profileAddress }}</b-card-text>
        <b-card-text> {{ profileItem.profileAbout }} </b-card-text>
      </b-card-body>

    </b-card>

    <b-card-group class='mx-lg-5' v-show='!isEditing'>

      <b-card
        v-bind:header='this.content.profileStrength[this.language]'
        bg-variant='white'
        class='mx-lg-1 my-3 shadow'
      >

        <b-list-group
          v-for='(elementStrength,index) in profileItem.profileStrength' 
          v-bind:key='index' 
        >
          <b-list-group-item> {{ elementStrength }} </b-list-group-item>
        </b-list-group>

      </b-card>

      <b-card
        v-bind:header='this.content.profileSocialNetwork[this.language]'
        bg-variant='white'
        class='mx-lg-1 my-3  shadow'
      >

        <b-list-group
          v-for='(elementSocialNetwork,index) in profileItem.profileSocialNetwork' 
          v-bind:key='index' 
          
        >
         <b-list-group-item> {{ elementSocialNetwork }} </b-list-group-item>
        </b-list-group>

      </b-card>

      <b-card
        v-bind:header='this.content.profileHobbie[this.language]'
        bg-variant='white'
        class='mx-lg-1 my-3 shadow'
      >

        <b-list-group
          v-for='(elementHobbie,index) in profileItem.profileHobbie' 
          v-bind:key='index' 
        >
          <b-list-group-item> {{ elementHobbie }} </b-list-group-item>
        </b-list-group>

      </b-card>

    </b-card-group>

      <!-- Edit and delete buttons -->
      <div class='my-3' v-show='!isEditing'>
        <span>
          <b-icon icon='pencil-square' v-on:click='showForm'></b-icon>
        </span>
      </div>

      <!-- Complete and imcomplete state toggle -->
      <div class='d-flex justify-content-end' v-show='!isEditing'>

        <div  v-show='!isEditing && profileItem.profileCompleted' v-on:click='imcompleteItem(profileItem)'>
          <b-icon icon='circle-fill' variant='success'></b-icon>
        </div>

        <div v-show='!isEditing && !profileItem.profileCompleted' v-on:click='completeItem(profileItem)'>
          <b-icon icon='circle-fill' variant='danger'></b-icon>
        </div>

      </div>

    

    <!-- Edition mode -->
    <b-card bg-variant='light' class='mx-lg-5 shadow' v-show='isEditing'>

      <!-- Form -->
      <b-form-group
        label-cols-lg='3'
        v-bind:label='this.content.profileLabel[this.language]'
        label-size='lg'
        label-class='font-weight-bold pt-0'
        class='mb-0'
      >
        <b-form-group
          label-cols-sm='3'
          v-bind:label='this.content.profilePhotoLabel[this.language]'
          label-align-sm='right'
          label-for='profilePhoto'
        >
            <!-- Styled -->
            <b-input-group>

              <b-form-file
                id='profilePhoto'
                v-model='profilePhoto'
                v-bind:placeholder='this.content.profilePhotoPlaceholder[this.language]'
                v-bind:drop-placeholder='this.content.profilePhotoDropPlaceholder[this.language]'
                v-on:change='onFileChange'
                accept='.jpg, .jpeg, .png'
                v-bind:state='Boolean(profilePhoto)'
              />

              <b-input-group-append>
                <b-button @click='profilePhoto = null'>{{ this.content.cancel[this.language] }}</b-button>
              </b-input-group-append>

            </b-input-group>

          </b-form-group>

          <b-form-group
            label-cols-sm='3'
            v-bind:label='this.content.profileFirstName[this.language]'
            label-align-sm='right'
            label-for='profileFirstName'
            v-bind:valid-feedback='this.content.globalThanksA[this.language]'
            v-bind:invalid-feedback='profileFirstNameInvalid'
            v-bind:state='profileFirstNameState'
          >

            <b-form-input
              id='profileFirstName' 
              v-model='profileItem.profileFirstName' 
              type='text' 
              v-bind:placeholder='this.content.profileFirstNamePlaceholder[this.language]'
            />

          </b-form-group>

          <b-form-group
            label-cols-sm='3'
            v-bind:label='this.content.profileLastName[this.language]'
            label-align-sm='right'
            label-for='profileLastName'
            v-bind:valid-feedback='this.content.globalThanksA[this.language]'
            v-bind:invalid-feedback='profileLastNameInvalid'
            v-bind:state='profileLastNameState'
          >

            <b-form-input 
              id='profileLastName' 
              v-model='profileItem.profileLastName' 
              type='text' 
              v-bind:placeholder='this.content.profileLastNamePlaceholder[this.language]'
            />

          </b-form-group>

          <b-form-group
            label-cols-sm='3'
            v-bind:label='this.content.profilePosition[this.language]'
            label-align-sm='right'
            label-for='profilePosition'
            v-bind:valid-feedback='this.content.globalThanksA[this.language]'
            v-bind:invalid-feedback='profilePositionInvalid'
            v-bind:state='profilePositionState'
          >

            <b-form-input 
              id='profileLastName' 
              v-model='profileItem.profilePosition' 
              type='text' 
              v-bind:placeholder='this.content.profilePositionPlaceholder[this.language]'
            />

          </b-form-group>

          <b-form-group
            label-cols-sm='3'
            v-bind:label='this.content.profilePhone[this.language]'
            label-align-sm='right'
            label-for='profilePhone'
            v-bind:valid-feedback='this.content.globalThanksA[this.language]'
            v-bind:invalid-feedback='profilePhoneInvalid'
            v-bind:state='profilePhoneState'
          >

            <b-form-input 
              id='profilePhone' 
              v-model='profileItem.profilePhone' 
              type='tel' 
              v-bind:placeholder='this.content.profilePhonePlaceholder[this.language]'
            />

          </b-form-group>

          <b-form-group
            label-cols-sm='3'
            v-bind:label='this.content.profileEmail[this.language]'
            label-align-sm='right'
            label-for='profileEmail'
            v-bind:valid-feedback='this.content.globalThanksA[this.language]'
            v-bind:invalid-feedback='profileEmailInvalid'
            v-bind:state='profileEmailState'
          >

            <b-form-input
              id='profileEmail' 
              v-model='profileItem.profileEmail' 
              type='email' 
              v-bind:placeholder='this.content.profileEmailPlaceholder[this.language]'
            />
          
          </b-form-group>

          <b-form-group
            label-cols-sm='3'
            v-bind:label='this.content.profileAddress[this.language]'
            label-align-sm='right'
            label-for='profileAddress'
            v-bind:valid-feedback='this.content.globalThanksA[this.language]'
            v-bind:invalid-feedback='profileAddressInvalid'
            v-bind:state='profileAddressState'
          >

            <b-form-input
              id='profileAddress'
              v-model='profileItem.profileAddress'
              type='text'
              v-bind:placeholder='this.content.profileAddressPlaceholder[this.language]'
            />
          
          </b-form-group>

          <b-form-group
            label-cols-sm='3'
            v-bind:label='this.content.profileAbout[this.language]'
            label-align-sm='right'
            label-for='profileAbout'
          >

            <b-form-textarea
              id='profileAbout'
              v-model='profileItem.profileAbout'
              type='text'
              rows='5'
              v-bind:placeholder='this.content.profileAboutPlaceholder[this.language]'
            />
          
          </b-form-group>

          <b-form-group
            label-cols-sm='3'
            v-bind:label='this.content.profileStrength[this.language]'
            label-align-sm='right'
            label-for='profileStrength'
          >

            <b-form-tags
              id='profileStrength'
              v-model='profileItem.profileStrength'
              type='text'
              v-bind:value='this.content.profileStrengthPlaceholder[this.language]'
            />
          
          </b-form-group>

          <b-form-group
            label-cols-sm='3'
            v-bind:label='this.content.profileSocialNetwork[this.language]'
            label-align-sm='right'
            label-for='profileSocialNetwork'
          >

            <b-form-tags
              id='profileSocialNetwork'
              v-model='profileItem.profileSocialNetwork'
              type='text'
              v-bind:value='this.content.profileSocialNetworkPlaceholder[this.language]'
            />
          
          </b-form-group>

          <b-form-group
            label-cols-sm='3'
            v-bind:label='this.content.profileHobbie[this.language]'
            label-align-sm='right'
            label-for='profileHobbie'
          >

            <b-form-tags
              id='profileHobbie'
              v-model='profileItem.profileHobbie'
              type='text'
              v-bind:value='this.content.profileHobbiePlaceholder[this.language]'
            />
          
          </b-form-group>

      </b-form-group>

      <div>
        <b-icon icon='check-square' variant='success' v-on:click='hideForm'></b-icon>
      </div>
    </b-card>

  </div>
</template>

<script>
export default {
  name:'ProfileListItem',
  //Properties received from parent
  props: ['profileItem','content','language'],
  data() {
    return {
      isEditing: false,
      profilePhoto: null,
      profilePhotoUrl: null,
    };
  },
  computed: {
    profileFirstNameState() {
      return this.profileItem.profileFirstName.length > 2
    },
    profileLastNameState() {
    return this.profileItem.profileLastName.length > 2
    },
    profilePositionState() {
    return this.profileItem.profilePosition.length > 2
    },     
    profilePhoneState() {
    return this.profileItem.profilePhone.length > 8
    },
    profileEmailState() {
      return this.profileItem.profileEmail.length > 6
    },
    profileAddressState() {
    return this.profileItem.profileAddress.length > 5
    },
    profileFirstNameInvalid() {
    if (this.profileItem.profileFirstName.length > 0) {
        return this.content.profileFirstNameInvalidVoid[this.language]
    } 
        return this.content.profileFirstNameInvalid[this.language]
    },
    profileLastNameInvalid() {
    if (this.profileItem.profileLastName.length > 0) {
        return this.content.profileLastNameInvalidVoid[this.language]
    } 
        return this.content.profileLastNameInvalid[this.language]
    },
    profilePositionInvalid() {
    if (this.profileItem.profilePosition.length > 0) {
        return this.content.profilePositionInvalidVoid[this.language]
    } 
        return this.content.profilePositionInvalid[this.language]
    },
    profilePhoneInvalid() {
    if (this.profileItem.profilePhone.length > 0) {
        return this.content.profilePhoneInvalidVoid[this.language]
    } 
        return this.content.profilePhoneInvalid[this.language]
    },
    profileEmailInvalid() {
    if (this.profileItem.profileEmail.length > 0) {
        return this.content.profileEmailInvalidVoid[this.language]
    } 
        return this.content.profileEmailInvalid[this.language]
    },
    profileAddressInvalid() {
    if (this.profileItem.profileAddress.length > 0) {
        return this.content.profileAddressInvalidVoid[this.language]
    } 
        return this.content.profileAddressInvalid[this.language]
    }
    
  }, 
  methods: {
    showForm() {
      this.isEditing = true;
    },
    hideForm() {
      this.isEditing = false;
    },
    completeItem(profileItem) {
      this.$emit('complete-item', profileItem);
    },
    imcompleteItem(profileItem) {
      this.$emit('imcomplete-item', profileItem);
    },
    //Composing URL for scr attribute
    onFileChange(profilePhoto) {
      const file = profilePhoto.target.files[0];
      this.profilePhotoUrl = URL.createObjectURL(file);
      this.profileItem.profilePhoto = this.profilePhotoUrl;
    }
  }
};
</script>

<style scoped>
.b-icon {
  font-size:1.5rem
}
</style>
  

