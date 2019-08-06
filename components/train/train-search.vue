<template>
  <v-btn color="primary" @click="searchForTrain">Search train</v-btn>
</template>

<script>
export default {
  methods: {
    async searchForTrain() {
      if (this.$poweredUp.isWebBluetooth) {
        await this.$store.dispatch('trains/searchTrain')
      } else {
        this.$bvToast.toast(
          'Your browser does not support the Web Bluetooth specification.',
          {
            title: 'Warning',
            variant: 'warning'
          }
        )
      }
    }
  }
}
</script>
