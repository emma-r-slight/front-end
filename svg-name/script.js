const path = document.querySelectorAll('.name')
let currentFrame = 0
let total_frames = 60

const length = []

console.log(path)

path.forEach((letter) => {
  let l = 0
  l = letter.getTotalLength()
  length.push(l)
  letter.style.strokeDasharray = `${l} ${l}`
  letter.style.strokeDashoffset = l
})
console.log(length)

let handle = 0

const draw = () => {
  let progress = currentFrame / total_frames
  if (progress > 1) {
    window.cancelAnimationFrame(handle)
  } else {
    currentFrame++
    path.forEach((letter) => {
      letter.style.strokeDashoffset = Math.floor(letter * (1 - progress))
    })
    handle = window.requestAnimationFrame(draw)
  }
}

draw()
