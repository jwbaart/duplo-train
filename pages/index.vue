<template>
  <v-container>
    <v-layout>
      <v-flex>
        <TrainSearch />
        <TrainList />
        <TrainConductor />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import TrainSearch from '../components/train/train-search'
import TrainList from '../components/train/train-list'
import TrainConductor from '../components/train/train-conductor'

export default {
  components: {
    TrainSearch,
    TrainList,
    TrainConductor
  }
}
</script>

<style></style>
