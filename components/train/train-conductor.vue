<template>
  <section v-if="!!activeTrain">
    <v-card>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>{{ activeTrain.name }}</v-list-item-title>
        </v-list-item-content>
        <v-list-item-avatar tile size="80">
          <v-icon>mdi-battery{{ getBatteryPercentage() }}-bluetooth</v-icon>
        </v-list-item-avatar>
      </v-list-item>
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
      activeTrain.setMotorSpeed('MOTOR', -100)
    },
    brake() {
      const activeTrain = this.$store.getters['trains/activeTrain']
      activeTrain.brakeMotor('MOTOR')
    },
    soundHorn() {
      const activeTrain = this.$store.getters['trains/activeTrain']
      activeTrain.playSound(this.$poweredUp.Consts.DuploTrainBaseSound.HORN)
    },
    moveForwards() {
      const activeTrain = this.$store.getters['trains/activeTrain']
      activeTrain.setMotorSpeed('MOTOR', 100)
    },
    getBatteryPercentage() {
      // Move to component with color logic
      const activeTrain = this.$store.getters['trains/activeTrain']
      switch (activeTrain._batteryLevel) {
        case 100:
          return ''
        case 0:
          return '-alert'
        default:
          return '-' + activeTrain._batteryLevel
      }
    }
  }
}
</script>
