<template>
    <div class='education-create my-3'>

        <!-- Create Off, can call a create action -->
        <span class='shadow'>
          <b-icon icon='plus-square-fill' variant='success' v-on:click='openForm' v-show='!isCreating'></b-icon>
        </span>
            
        <!-- Create ON -->
        <b-card bg-variant='white' class='mx-lg-5 shadow' v-show='isCreating'>

            <b-form-group
                label-cols-lg='3'
                v-bind:label='this.content.educationLabel[this.language]'
                label-size='lg'
                label-class='font-weight-bold pt-0'
                class='mb-0'
            >

                <b-form-group
                    label-cols-sm='3'
                    v-bind:label='this.content.educationTitle[this.language]'
                    label-align-sm='right'
                    label-for='educationTitleCreate'
                    v-bind:valid-feedback='this.content.globalThanksA[this.language]'
                    v-bind:invalid-feedback='educationTitleInvalid'
                    v-bind:state='educationTitleState'
                >
                    <b-form-input id='educationTitleCreate' v-model='educationTitle' type='text' v-bind:placeholder='this.content.educationTitlePlaceholder[this.language]'></b-form-input>
                </b-form-group>

                <b-form-group
                    label-cols-sm='3'
                    v-bind:label='this.content.educationDuration[this.language]'
                    label-align-sm='right'
                    label-for='educationDurationCreate'
                    v-bind:valid-feedback='this.content.globalThanksB[this.language]'
                    v-bind:invalid-feedback='educationDurationInvalid'
                    v-bind:state='educationDurationState'
                >
                    <b-form-input id='educationDurationCreate' v-model='educationDuration' type='text' v-bind:placeholder='this.content.educationDurationPlaceholder[this.language]'></b-form-input>
                </b-form-group>

                <b-form-group
                    label-cols-sm='3'
                    v-bind:label='this.content.educationDescription[this.language]'
                    label-align-sm='right'
                    label-for='educationDescriptionCreate'
                    v-bind:valid-feedback='this.content.globalThanksC[this.language]'
                    v-bind:invalid-feedback='educationDescriptionInvalid'
                    v-bind:state='educationDescriptionState'
                >
                    <b-form-textarea id='educationDescriptionCreate' v-model='educationDescription' type='textarea' rows='3' v-bind:placeholder='this.content.educationDescriptionPlaceholder[this.language]'></b-form-textarea>
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
    name:'EducationCreate',
    props: ['content','language'],
    data() {
        //Default return
        return {
            educationId: '',
            educationTitle: '',
            educationDuration: '',
            educationDescription: '',
            isCreating: false
        };
    },
    //Validation
    computed: {
        educationTitleState() {
        return this.educationTitle.length > 5
        },
        educationDurationState() {
        return this.educationDuration.length > 4
        },    
        educationDescriptionState() {
        return this.educationDescription.length > 3
        },
        educationTitleInvalid() {
        if (this.educationTitle.length > 0) {
            return this.content.educationTitleInvalidVoid[this.language]
        } 
            return this.content.educationTitleInvalid[this.language]
        },
        educationDurationInvalid() {
        if (this.educationDuration.length > 0) {
            return this.content.educationDurationInvalidVoid[this.language]
        }
            return this.content.educationDurationInvalid[this.language]
        },
        educationDescriptionInvalid() {
        if (this.educationDescription.length > 0) {
            return this.content.educationDescriptionInvalidVoid[this.language]
        }
            return this.content.educationDescriptionInvalid[this.language]
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
            if (this.educationTitle.length > 5 && this.educationDuration.length > 4 && this.educationDescription.length > 3) {
                const educationId = this.educationId;
                const educationTitle = this.educationTitle;
                const educationDuration = this.educationDuration;
                const educationDescription = this.educationDescription;
                this.$emit('create-education-item', {
                educationId,
                educationTitle,
                educationDuration,
                educationDescription,
                educationCompleted: false
                })
                this.educationId='',
                this.educationTitle='',
                this.educationDuration='',
                this.educationDescription='',
                this.isCreating = false
            }
        }
    } 
};
</script>

<style scoped>
.b-icon{
  font-size:1.5rem
}
</style>