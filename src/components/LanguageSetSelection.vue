<template>
    <div class='d-flex justify-content-end'>
        <span class='pr-1' v-on:click="changeLanguage('pt')">
            <b-img 
                class='flag-icon' 
                v-bind:src="require('@/assets/pt.svg')" 
                alt='Portugal flag'
            />
        </span>
        <span class='pl-1' v-on:click="changeLanguage('gb')">
            <b-img 
                class='flag-icon' 
                v-bind:src="require('@/assets/gb.svg' )" 
                alt='Great Britain flag'
            />
        </span>
    </div> 
</template>

<script>
export default {
    name:'LanguageSelection',
    //Methods for actions
    methods: {
        changeLanguage(language) {
            this.$emit('change-language', language);
        }
    } 
}
</script>

<style scoped>

.flag-icon {
width: 3rem;
}

</style>