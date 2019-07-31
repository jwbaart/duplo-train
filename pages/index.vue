<template>
  <v-container>
    <v-layout>
      <v-flex>
        <TrainSearch />
        <TrainList />
        <TrainCommander />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import TrainSearch from '../components/train/train-search'
import TrainList from '../components/train/train-list'
import TrainCommander from '../components/train/train-commander'

export default {
  components: {
    TrainSearch,
    TrainList,
    TrainCommander
  }
}
</script>

<style></style>
