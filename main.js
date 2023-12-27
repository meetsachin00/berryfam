// main.js

document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.slider');
  let currentIndex = 0;

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slider.children.length;
    updateSlider();
  }

  function updateSlider() {
    const translateValue = -currentIndex * 100 + '%';
    slider.style.transform = 'translateX(' + translateValue + ')';
  }

  // Move to the next slide every 5 seconds
  setInterval(nextSlide, 5000);
});



// Additional code to handle Twitter embeds
twttr.ready(function (twttr) {
  twttr.events.bind('rendered', function (event) {
    // Update the slider after a Twitter embed is rendered
    updateSlider();
    // Manually trigger the window resize event to re-layout the slider
    window.dispatchEvent(new Event('resize'));
  });
});
