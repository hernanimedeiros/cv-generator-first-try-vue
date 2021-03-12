<template>
    <div class='experience-create my-3'>

        <!-- Create Off, can call a create action -->
        <span class='shadow'>
          <b-icon 
            icon='plus-square-fill' 
            variant='success' 
            v-on:click='openForm' 
            v-show='!isCreating'
          />
        </span>
            
        <!-- Create ON -->
        <b-card bg-variant='white' class='mx-lg-5 shadow' v-show='isCreating'>

            <b-form-group
                label-cols-lg='3'
                v-bind:label='this.content.experienceLabel[this.language]'
                label-size='lg'
                label-class='font-weight-bold pt-0'
                class='mb-0'
            >

                <b-form-group
                    label-cols-sm='3'
                    v-bind:label='this.content.experienceTitle[this.language]'
                    label-align-sm='right'
                    label-for='experienceTitleCreate'
                    v-bind:valid-feedback='this.content.globalThanksA[this.language]'
                    v-bind:invalid-feedback='experienceTitleInvalid'
                    v-bind:state='experienceTitleState'
                >
                    <b-form-input id='experienceTitleCreate' v-model='experienceTitle' type='text' v-bind:placeholder='this.content.experienceTitlePlaceholder[this.language]'></b-form-input>
                </b-form-group>

                <b-form-group
                    label-cols-sm='3'
                    v-bind:label='this.content.experienceSubTitle[this.language]'
                    label-align-sm='right'
                    label-for='experienceSubTitleCreate'
                    v-bind:valid-feedback='this.content.globalThanksA[this.language]'
                    v-bind:invalid-feedback='experienceSubTitleInvalid'
                    v-bind:state='experienceSubTitleState'
                >
                    <b-form-input
                        id='experienceSubTitleCreate'
                        v-model='experienceSubTitle'
                        type='text'
                        v-bind:placeholder='this.content.experienceSubTitlePlaceholder[this.language]'
                    />
                </b-form-group>

                <b-form-group
                    label-cols-sm='3'
                    v-bind:label='this.content.experienceDuration[this.language]'
                    label-align-sm='right'
                    label-for='experienceDurationCreate'
                    v-bind:valid-feedback='this.content.globalThanksB[this.language]'
                    v-bind:invalid-feedback='experienceDurationInvalid'
                    v-bind:state='experienceDurationState'
                >
                    <b-form-input 
                        id='experienceDurationCreate' 
                        v-model='experienceDuration' 
                        type='text' 
                        v-bind:placeholder='this.content.experienceDurationPlaceholder[this.language]'
                    />
                </b-form-group>

                <b-form-group
                    label-cols-sm='3'
                    v-bind:label='this.content.experienceDescription[this.language]'
                    label-align-sm='right'
                    label-for='experienceDescriptionCreate'
                    v-bind:valid-feedback='this.content.globalThanksC[this.language]'
                    v-bind:invalid-feedback='experienceDescriptionInvalid'
                    v-bind:state='experienceDescriptionState'
                >
                    <b-form-textarea 
                        id='experienceDescriptionCreate' 
                        v-model='experienceDescription' 
                        type='textarea' 
                        rows='3' 
                        v-bind:placeholder='this.content.experienceDescriptionPlaceholder[this.language]'
                    />
                </b-form-group>

            </b-form-group>

            <div class='d-flex justify-content-end'>
                <span class='pr-3' v-on:click='sendForm'>
                    <b-icon icon='hand-thumbs-up' variant='success'></b-icon>
                </span>
                <span class='pl-3' v-on:click='closeForm'>
                    <b-icon icon='hand-thumbs-down' variant='danger'></b-icon>
                </span>
            </div>

        </b-card>



    </div>
</template>

<script>
export default {
    name:'ExperienceCreate',
    props: ['content','language'],
    data() {
        //Default return
        return {
            experienceId: '',
            experienceTitle: '',
            experienceSubTitle: '',
            experienceDuration: '',
            experienceDescription: '',
            isCreating: false
        };
    },
    //Validation
    computed: {
        experienceTitleState() {
            return this.experienceTitle.length > 5
        },
        experienceSubTitleState() {
            return this.experienceTitle.length > 5
        },
        experienceDurationState() {
            return this.experienceDuration.length > 4
        },    
        experienceDescriptionState() {
            return this.experienceDescription.length > 3
        },
        experienceTitleInvalid() {
            if (this.experienceTitle.length > 0) {
                return this.content.experienceTitleInvalidVoid[this.language]
            } 
                return this.content.experienceTitleInvalid[this.language]
        },
        experienceSubTitleInvalid() {
            if (this.experienceTitle.length > 0) {
                return this.content.experienceTitleInvalidVoid[this.language]
            } 
                return this.content.experienceTitleInvalid[this.language]
        },
        experienceDurationInvalid() {
            if (this.experienceDuration.length > 0) {
                return this.content.experienceDurationInvalidVoid[this.language]
            }
                return this.content.experienceDurationInvalid[this.language]
        },
        experienceDescriptionInvalid() {
            if (this.experienceDescription.length > 0) {
                return this.content.experienceDescriptionInvalidVoid[this.language]
            }
                return this.content.experienceDescriptionInvalid[this.language]
        }
    },
    //Methods for actions
    methods: {
        openForm() {
            this.isCreating = true;
        },
        closeForm() {
            this.isCreating = false;
        },
        sendForm() {
            if (this.experienceTitle.length > 5 && this.experienceDuration.length > 4 && this.experienceDescription.length > 3) {
                const experienceId = this.experienceId;
                const experienceTitle = this.experienceTitle;
                const experienceSubTitle = this.experienceSubTitle;
                const experienceDuration = this.experienceDuration;
                const experienceDescription = this.experienceDescription;
                this.$emit('create-experience-item', {
                experienceId,
                experienceTitle,
                experienceSubTitle,
                experienceDuration,
                experienceDescription,
                experienceCompleted: false
                })
                this.experienceId='',
                this.experienceTitle='',
                this.experienceSubTitle='',
                this.experienceDuration='',
                this.experienceDescription='',
                this.isCreating = false
            }
        }
    } 
};
</script>

<style scoped>
.b-icon {
  font-size:1.5rem
}
</style>