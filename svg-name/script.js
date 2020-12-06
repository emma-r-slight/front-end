const paths = document.querySelectorAll('.name')
const logo = document.querySelectorAll('.logo')
paths.forEach((path) => {
  console.log(path)
  const length = path.getTotalLength()
  // path.style.transition = path.style.webkitTransition = 'none'
  path.style.strokeDasharray = `${length} ${length}`
  path.style.strokeDashoffset = length

  path.getBoundingClientRect()

  path.style.transition = path.style.webkitTransition =
    'stroke-dashoffset 2s ease-in-out'

  path.style.strokeDashoffset = '0'
})
