<template>
  <section class="train-list">
    <ul class="train-list">
      <li v-for="train in trains" :key="train.name">
        <p>{{ train.name }}</p>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      trains: (state) => state.trains.list
    })
  }
}
</script>
