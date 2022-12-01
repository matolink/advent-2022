const text = (await Deno.readTextFile('./input.txt')).split('\n\n').map((v) => {
  return v.split('\n').map((v) => parseInt(v))
})
const totals = text.map((v) => {
  let sum = 0
  v.forEach((element) => {
    sum += element
  })
  return sum
})
let sorted = totals.sort((a, b) => b - a)
console.log(sorted[0]) //response 1
let sum = 0
for (let index = 0; index < 3; index++) {
    sum += sorted[index]
}
console.log(sum) //response 2

