<template>
  <section column class="train-search">
    <v-tooltip top left class="train-conductor__battery-tooltip">
      <template v-slot:activator="{ on }">
        <v-btn fab color="secondary" v-on="on" @click="addDummytrain">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
      <span>Add a dummy train</span>
    </v-tooltip>

    <v-tooltip top left class="train-conductor__battery-tooltip">
      <template v-slot:activator="{ on }">
        <v-btn fab color="primary" v-on="on" @click="searchForTrain">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
      <span>Add train</span>
    </v-tooltip>
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

<style>
.train-search {
  position: fixed;
  bottom: 3rem;
  right: 1rem;
  text-align: center;
}
</style>
