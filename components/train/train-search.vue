<template>
  <b-button variant="primary" @click="searchForTrain">Search train</b-button>
</template>

<script>
export default {
  methods: {
    searchForTrain(poweredUp) {
      if (this.$poweredUp.isWebBluetooth) {
        console.log(`start scanning`)
        this.$pup.scan() // Start scanning for hubs
      } else {
        console.warn(
          'Your browser does not support the Web Bluetooth specification.'
        )
      }
    }
  }
}
</script>
