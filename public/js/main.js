let lazyloadThrottleTimeout;

function lazyload() {
  if (lazyloadThrottleTimeout) {
    clearTimeout(lazyloadThrottleTimeout);
  }

  lazyloadThrottleTimeout = setTimeout(function () {
    const scrollTop = window.pageYOffset;
    const lazyloadImages = document.querySelectorAll("img.lazy");
    console.log(lazyloadImages);
    lazyloadImages.forEach(function (img) {
      if (img.offsetTop < window.innerHeight + scrollTop) {
        img.src = img.dataset.src;
        img.classList.remove("lazy");
      }
    });
    if (lazyloadImages.length == 0) {
      document.removeEventListener("scroll", lazyload);
      window.removeEventListener("resize", lazyload);
      window.removeEventListener("orientationChange", lazyload);
    }
  }, 20);
}

document.addEventListener("scroll", lazyload);
window.addEventListener("resize", lazyload);
window.addEventListener("orientationChange", lazyload);