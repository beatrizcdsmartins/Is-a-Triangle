const triangle = document.querySelector('.triangleImg')


triangle.addEventListener('mouseenter', () => {
  anime({
    targets: triangle,
    scale: 1.15,
    duration: 400,
    easing: 'easeOutExpo'
  })
})

triangle.addEventListener('mouseleave', () => {
  anime({
    targets: triangle,
    scale: 0.8,
    duration: 600,
    easing: 'easeOutElastic(1, .5)'
  })
})

anime({
  targets: '.containerImgs img', 
  translateY: [-10, 10], 
  direction: 'alternate',
  loop: true,
  easing: 'easeInOutSine',
  duration: 800  
})


