<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-overlay :value="isLoading">
          <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>
        <TrainSearch />
        <TrainList />
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12 md6>
        <TrainConductor />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import TrainSearch from '../components/train/train-search'
import TrainList from '../components/train/train-list'
import TrainConductor from '../components/train/train-conductor'

export default {
  components: {
    TrainSearch,
    TrainList,
    TrainConductor
  },
  computed: {
    ...mapGetters({
      isLoading: 'trains/isLoading'
    })
  }
}
</script>

<style></style>
