<template>
    <div class='skill-create my-3'>

        <!-- Create Off, can call a create action -->
        <span class='shadow'>
          <b-icon icon='plus-square-fill' variant='success' v-on:click='openForm' v-show='!isCreating'></b-icon>
        </span>
            
        <!-- Create ON -->
        <b-card bg-variant='white' class='mx-lg-5 shadow' v-show='isCreating'>

            <b-form-group
                label-cols-lg='3'
                v-bind:label='this.content.skillLabel[this.language]'
                label-size='lg'
                label-class='font-weight-bold pt-0'
                class='mb-0'
            >

                <b-form-group
                    label-cols-sm='3'
                    v-bind:label='this.content.skillTitle[this.language]'
                    label-align-sm='right'
                    label-for='skillTitleCreate'
                    v-bind:valid-feedback='this.content.globalThanksA[this.language]'
                    v-bind:invalid-feedback='skillTitleInvalid'
                    v-bind:state='skillTitleState'
                >
                    <b-form-input id='skillTitleCreate' v-model='skillTitle' type='text' v-bind:placeholder='this.content.skillTitlePlaceholder[this.language]'></b-form-input>
                </b-form-group>

                <b-form-group
                    label-cols-sm='3'
                    v-bind:label='this.content.skillDescription[this.language]'
                    label-align-sm='right'
                    label-for='skillDescriptionCreate'
                    v-bind:valid-feedback='this.content.globalThanksC[this.language]'
                    v-bind:invalid-feedback='skillDescriptionInvalid'
                    v-bind:state='skillDescriptionState'
                >
                    <b-form-textarea id='skillDescriptionCreate' v-model='skillDescription' type='textarea' v-bind:placeholder='this.content.skillDescriptionPlaceholder[this.language]'></b-form-textarea>
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
    name:'SkillCreate',
    props: ['content','language'],
    data() {
        //Default return
        return {
            skillTitle: '',
            skillDescription: '',
            isCreating: false
        };
    },
    //Validation
    computed: {
        skillTitleState() {
        return this.skillTitle.length > 5
        },  
        skillDescriptionState() {
        return this.skillDescription.length > 5
        },
        skillTitleInvalid() {
        if (this.skillTitle.length > 0) {
            return this.content.skillTitleInvalidVoid[this.language]
        } 
            return this.content.skillTitleInvalid[this.language]
        },
        skillDescriptionInvalid() {
        if (this.skillDescription.length > 0) {
            return this.content.skillDescriptionInvalidVoid[this.language]
        }
            return this.content.skillDescriptionInvalid[this.language]
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
            if (this.skillTitle.length > 5 && this.skillDescription.length > 5) {
                const skillId = this.skillId;
                const skillTitle = this.skillTitle;
                const skillDescription = this.skillDescription;
                this.$emit('create-skill-item', {
                skillId,
                skillTitle,
                skillDescription,
                skillCompleted: false
                })
                this.skillId='',
                this.skillTitle='',
                this.skillDescription='',
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