<template>
  <section v-if="!!activeTrain">
    <v-card>
      <v-card-title>{{ activeTrain.name }}</v-card-title>
      <v-card-actions>
        <v-btn outlined title="Backwards" @click="moveBackwards()">
          <v-icon>mdi-arrow-left-circle</v-icon>
        </v-btn>
        <v-btn outlined title="Brake" @click="brake()">
          <v-icon>mdi-stop-circle-outline</v-icon>
        </v-btn>
        <v-btn outlined title="Sound horn" @click="soundHorn()">
          <v-icon>mdi-bullhorn</v-icon>
        </v-btn>
        <v-btn outlined title="Forward" @click="moveForwards()">
          <v-icon>mdi-arrow-right-circle</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      activeTrain: 'trains/activeTrain'
    })
  },
  methods: {
    moveBackwards() {
      const activeTrain = this.$store.getters['trains/activeTrain']
      activeTrain.setMotorSpeed('A', -100)
    },
    brake() {
      const activeTrain = this.$store.getters['trains/activeTrain']
      activeTrain.brakeMotor('A')
    },
    soundHorn() {
      const activeTrain = this.$store.getters['trains/activeTrain']
      activeTrain.playSound(this.$poweredUp.Consts.DuploTrainBaseSound.HORN)
    },
    moveForwards() {
      const activeTrain = this.$store.getters['trains/activeTrain']
      activeTrain.setMotorSpeed('A', 100)
    }
  }
}
</script>
