<template>
  <b-button variant="primary" @click="searchForTrain">Search train</b-button>
</template>

<script>
export default {
  methods: {
    searchForTrain(poweredUp) {
      if (this.$poweredUp.isWebBluetooth) {
        this.$pup.scan() // Start scanning for hubs
        this.discoverTrain()
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
    discoverTrain() {
      this.$pup.on('discover', async (train) => {
        await this.$store.commit('trains/add', train)
      })
    }
  }
}
</script>
