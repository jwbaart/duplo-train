<template>
  <v-container grid-list-md>
    <v-overlay :value="isLoading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>

    <v-layout wrap>
      <v-flex v-for="train in trains" :key="train.name" xs12 sm6 md4>
        <TrainConductor :train="train" />
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex xs12>
        <TrainSearch />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import TrainSearch from '../components/train/train-search'
import TrainConductor from '../components/train/train-conductor'

export default {
  components: {
    TrainSearch,
    TrainConductor
  },
  computed: {
    ...mapGetters({
      isLoading: 'duplo/isLoading',
      trains: 'duplo/trains'
    })
  }
}
</script>

<style></style>
