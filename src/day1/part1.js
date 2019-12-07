const div = (a, b) => a / b
const sub = (a, b) => a - b

const sum = xs => xs.reduce((a, b) => a + b, 0)
const map = (fn, xs) => xs.map(fn)

const calc = n => n
  |> div(?, 3.0)
  |> Math.floor
  |> sub(?, 2)

function main(inputs) {
  return inputs
    |> map(Number, ?)
    |> map(calc, ?)
    |> sum
}

export default main
export { calc, map, sum }
