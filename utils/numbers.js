export const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

export const roundToTens = (number) => round(number, 10)

const round = (value, step) => {
  step || (step = 1.0)
  const inv = 1.0 / step
  return Math.round(value * inv) / inv
}
