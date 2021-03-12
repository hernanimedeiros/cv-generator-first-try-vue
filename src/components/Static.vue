<template>
  <div class='Static my-5'>

    <b-card 
      bg-variant='light' 
      class='mx-lg-5 shadow' 
    >

      <!-- Preview in real time -->
      <div class='accordion' role='tablist'>
        <b-card no-body>
          <b-card-header header-tag='header' role='tab'>
            <b-button  v-b-toggle.accordion-1 variant='success'> {{this.content.previewPage[this.language]}} </b-button>
          </b-card-header>
          <b-collapse id='accordion-1' accordion='my-accordion' role='tabpanel'>
            <b-card-body>
              <!-- Bind elements -->
              <StaticItem
                v-bind:language='language' 
                v-bind:content='content' 
              />
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>

      <div class='my-3'>

        <!-- Preview in modal -->
        <span class ='pr-3'>
          <b-button variant='success' @click='modalShow = !modalShow'> {{this.content.previewBox[this.language]}} </b-button>
        </span>
        <b-modal ref="my-modal" size='xl' hide-footer v-model='modalShow' class="no-printme">
          <div>
          <!-- Bind elements -->
          <StaticItem
            v-bind:language='language' 
            v-bind:content='content' 
          />
          </div>
          <span class='d-flex justify-content-center'>
            <b-button  variant='success' @click='printAfterModal'> {{this.content.previewPdf[this.language]}} </b-button>
          </span>
        </b-modal>

        <!-- Save to .pdf -->
        <span class='pr-3'>
          <b-button variant='success' @click='print'> {{this.content.previewPdf[this.language]}} </b-button>
        </span>
      </div>

    </b-card>
  
  </div>
</template>

<script>
import StaticItem from '@/components/StaticItem.vue'

export default {
  name: 'Static',
  props: ['content','language'],
  components: {
    StaticItem,
  },    
  data() {
    return {
      modalShow: false
    }
  },
    methods: {
    print() {
      window.print();
    },

    closeModal(){
      this.$refs['my-modal'].hide()
    },

    printAfterModal() {
      this.closeModal();
      setTimeout(this.print, 1000);
    }
  
  }
}
</script>

<style>

</style>