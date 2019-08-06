<template>
  <section v-if="!!train">
    <v-card>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>{{ train.name }}</v-list-item-title>
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
export default {
  props: {
    train: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    moveBackwards() {
      this.train.setMotorSpeed('MOTOR', -100)
    },
    brake() {
      this.train.brakeMotor('MOTOR')
    },
    soundHorn() {
      this.train.playSound(this.$poweredUp.Consts.DuploTrainBaseSound.HORN)
    },
    moveForwards() {
      this.train.setMotorSpeed('MOTOR', 100)
    },
    getBatteryPercentage() {
      // Move to component with color logic
      switch (this.train._batteryLevel) {
        case 100:
          return ''
        case 0:
          return '-alert'
        default:
          return '-' + this.train._batteryLevel
      }
    }
  }
}
</script>
