<template>
    <div class='footer'>
        <footer>
            <div class='text-center'>
                <small> 
                    {{this.content.authorMessageA[this.language]}} 
                    <b-icon icon='heart-fill' animation='throb' font-scale='1' variant='danger'/>
                    <a v-bind:href='this.content.authorLink[this.language]' target='_blank'> 
                        {{this.content.authorCredit[this.language]}} 
                    </a> 
                    {{this.content.authorMessageB[this.language]}}
                </small>
            </div>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import GlobalJson from '@/global.json'
export default {
    name: 'Footer',
    props: ['language'],
    data() {
        return {
            content : GlobalJson
        }
    }
}
</script>

<style scoped>
    a {
        color: darkslateblue;
        text-decoration: none;
    }

    a:hover {
        text-decoration: none;
        color: purple;
        -webkit-transition: all 0.4s ease-in-out;
        -moz-transition: all 0.4s ease-in-out;
        -ms-transition: all 0.4s ease-in-out;
        -o-transition: all 0.4s ease-in-out;
    }

    a:focus {
        text-decoration: none;
    }

    small:hover{
        text-decoration: none;
    }
</style>