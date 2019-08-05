<template>
  <section class="train-list">
    <v-list class="train-list">
      <v-list-item v-for="train in trains" :key="train.name">
        <p>{{ train.name }}</p>
      </v-list-item>
    </v-list>
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
