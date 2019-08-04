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
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      trains: 'trains/trains'
    })
  }
}
</script>
