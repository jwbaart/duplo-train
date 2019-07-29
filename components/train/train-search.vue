<template>
  <b-button variant="primary" @click="searchForTrain">Search train</b-button>
</template>

<script>
export default {
  methods: {
    searchForTrain(poweredUp) {
      if (!this.$poweredUp.isWebBluetooth) {
        this.$pup.scan() // Start scanning for hubs
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
