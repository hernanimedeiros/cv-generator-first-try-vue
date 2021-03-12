<template>
    <div class='course-create my-3'>

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
        <b-card 
            bg-variant='white' 
            class='mx-lg-5 shadow' 
            v-show='isCreating'
        >

            <b-form-group
                label-cols-lg='3'
                v-bind:label='this.content.courseLabel[this.language]'
                label-size='lg'
                label-class='font-weight-bold pt-0'
                class='mb-0'
            >

                <b-form-group
                    label-cols-sm='3'
                    v-bind:label='this.content.courseTitle[this.language]'
                    label-align-sm='right'
                    label-for='courseTitleCreate'
                    v-bind:valid-feedback='this.content.globalThanksA[this.language]'
                    v-bind:invalid-feedback='courseTitleInvalid'
                    v-bind:state='courseTitleState'
                >
                    <b-form-input 
                        id='courseTitleCreate' 
                        v-model='courseTitle' 
                        type='text' 
                        v-bind:placeholder='this.content.courseTitlePlaceholder[this.language]'
                    />
                </b-form-group>

                <b-form-group
                    label-cols-sm='3'
                    v-bind:label='this.content.courseDuration[this.language]'
                    label-align-sm='right'
                    label-for='courseDurationCreate'
                    v-bind:valid-feedback='this.content.globalThanksB[this.language]'
                    v-bind:invalid-feedback='courseDurationInvalid'
                    v-bind:state='courseDurationState'
                >
                    <b-form-input 
                        id='courseDurationCreate' 
                        v-model='courseDuration' 
                        type='text' 
                        v-bind:placeholder='this.content.courseDurationPlaceholder[this.language]'
                    />
                </b-form-group>

                <b-form-group
                    label-cols-sm='3'
                    v-bind:label='this.content.courseDescription[this.language]'
                    label-align-sm='right'
                    label-for='courseDescriptionCreate'
                    v-bind:valid-feedback='this.content.globalThanksC[this.language]'
                    v-bind:invalid-feedback='courseDescriptionInvalid'
                    v-bind:state='courseDescriptionState'
                >
                    <b-form-textarea 
                        id='courseDescriptionCreate' 
                        v-model='courseDescription' 
                        type='textarea' rows='3' 
                        v-bind:placeholder='this.content.courseDescriptionPlaceholder[this.language]'
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
    name:'CourseCreate',
    props: ['content','language'],
    data() {
        //Default return
        return {
            courseId: '',
            courseTitle: '',
            courseDuration: '',
            courseDescription: '',
            isCreating: false
        };
    },
    //Validation
    computed: {
        courseTitleState() {
        return this.courseTitle.length > 5
        },
        courseDurationState() {
        return this.courseDuration.length > 4
        },    
        courseDescriptionState() {
        return this.courseDescription.length > 3
        },
        courseTitleInvalid() {
        if (this.courseTitle.length > 0) {
            return this.content.courseTitleInvalidVoid[this.language]
        } 
            return this.content.courseTitleInvalid[this.language]
        },
        courseDurationInvalid() {
        if (this.courseDuration.length > 0) {
            return this.content.courseDurationInvalidVoid[this.language]
        } 
            return this.content.courseDurationInvalid[this.language]
        },
        courseDescriptionInvalid() {
        if (this.courseDescription.length > 0) {
            return this.content.courseDescriptionInvalidVoid[this.language]
        } 
            return this.content.courseDescriptionInvalid[this.language]
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
            if (this.courseTitle.length > 5 && this.courseDuration.length > 4 && this.courseDescription.length > 3) {
                const courseId = this.courseId;
                const courseTitle = this.courseTitle;
                const courseDuration = this.courseDuration;
                const courseDescription = this.courseDescription;
                this.$emit('create-course-item', {
                courseId,
                courseTitle,
                courseDuration,
                courseDescription,
                courseCompleted: false
                })
                this.courseId='',
                this.courseTitle='',
                this.courseDuration='',
                this.courseDescription='',
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