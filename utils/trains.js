import { getRandomInt } from './numbers'

const createBaseTrain = () => {
  let trainNumber = 0

  return () => ({
    on: (input) => input,
    name: 'Dummy Train ' + ++trainNumber,
    playSound: () => alert('Toet toet'),
    setMotorSpeed: () => alert('speeding'),
    brakeMotor: () => alert('Stop!'),
    disconnect: () => {},
    _batteryLevel: getRandomInt(0, 101).toString()
  })
}

export const createDummyTrain = createBaseTrain()
