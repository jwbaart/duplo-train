<template>
  <section v-if="!!train" class="train-conductor">
    <v-card>
      <v-toolbar flat dense>
        <v-tooltip bottom left class="train-conductor__battery-tooltip">
          <template v-slot:activator="{ on }">
            <v-icon v-on="on"
              >mdi-battery{{ getBatteryPercentageIconName() }}-bluetooth</v-icon
            >
          </template>
          <span>{{ train._batteryLevel }}%</span>
        </v-tooltip>

        <v-toolbar-title>
          <span class="subheading">{{ train.name }}</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <v-tooltip bottom left class="train-conductor__remove">
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on" @click="removeTrain">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </template>
          <span>Remove train</span>
        </v-tooltip>
      </v-toolbar>
      <v-list-item>
        <v-slider
          v-model="speed"
          :tick-labels="speedTicks"
          ticks="always"
          tick-size="5"
          min="-2"
          max="2"
          vertical
          @change="onSliderSpeedChange($event)"
        ></v-slider>
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
import { roundToTens } from '../../utils/numbers'

export default {
  props: {
    train: {
      type: Object,
      default: () => {}
    }
  },
  data: () => ({
    speedTicks: ['--', '-', '0', '+', '++'],
    speed: 0
  }),
  mounted() {
    this.train.on('speed', (port, speed) => {
      this.speed = this.getTickedSpeed(speed)
    })
  },
  methods: {
    moveBackwards() {
      this.train.setMotorSpeed('MOTOR', -100)
    },
    brake() {
      this.train.playSound(this.$poweredUp.Consts.DuploTrainBaseSound.BRAKE)
      this.train.brakeMotor('MOTOR')
    },
    soundHorn() {
      this.train.playSound(this.$poweredUp.Consts.DuploTrainBaseSound.HORN)
    },
    moveForwards() {
      this.train.setMotorSpeed('MOTOR', 100)
    },
    getBatteryPercentageIconName() {
      const batteryLevel = roundToTens(this.train._batteryLevel)
      // Move to component with color logic
      switch (batteryLevel) {
        case 100:
          return ''
        case 0:
          return '-alert'
        default:
          return '-' + batteryLevel
      }
    },
    removeTrain() {
      this.$store.dispatch('duplo/removeTrain', { train: this.train })
    },
    getTickedSpeed(speed) {
      return Math.round(speed / 50) * 50
    },
    onSliderSpeedChange(speed) {
      this.train.setMotorSpeed('MOTOR', this.getTickedSpeed(speed * 50))
    }
  }
}
</script>

<style>
.train-conductor {
  margin-top: 1rem;
}

.train-conductor__battery-tooltip {
  margin-right: 0.5rem;
}
</style>
