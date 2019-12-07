import { calc, map, sum } from './part1'

function main(inputs) {
  const recur = mass => {
    const fuel = calc(mass)
    return fuel > 0 ? fuel + recur(fuel) : 0
  }

  return inputs
    |> map(Number, ?)
    |> map(recur, ?)
    |> sum
}

export default main
