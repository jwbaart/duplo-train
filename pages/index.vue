<template>
  <b-container>
    <Header />
    <b-row>
      <b-col>
        <TrainSearch />
        <TrainList />
        <TrainCommander />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import TrainSearch from '../components/train/train-search'
import TrainList from '../components/train/train-list'
import TrainCommander from '../components/train/train-commander'
import Header from '../components/header'

export default {
  components: {
    TrainSearch,
    TrainList,
    TrainCommander,
    Header
  }
}
</script>

<style></style>
