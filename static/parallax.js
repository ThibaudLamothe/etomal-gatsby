const parallax = document.getElementById("homepage-bgimage")
window.addEventListener("scroll", function () {
  let offset = window.pageYOffset
  let offset_text = -offset * 0.3
  parallax.style.backgroundPositionY = offset_text + "px"
  // console.log('Offset', offset)
})
