<template>
  <section class="train-search">
    <v-btn color="primary" @click="searchForTrain">Search train</v-btn>
    <v-btn color="secondary" @click="addDummytrain">Add dummy train</v-btn>
  </section>
</template>

<script>
export default {
  methods: {
    async searchForTrain() {
      if (this.$poweredUp.isWebBluetooth) {
        await this.$store.dispatch('duplo/searchTrain')
      } else {
        this.$bvToast.toast(
          'Your browser does not support the Web Bluetooth specification.',
          {
            title: 'Warning',
            variant: 'warning'
          }
        )
      }
    },
    addDummytrain() {
      this.$store.dispatch('duplo/addDummyTrain')
    }
  }
}
</script>
