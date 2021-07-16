export default () => {
  let lazyloadImages;

  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy");
    const imageObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const image = entry.target;
            image.src = image.dataset.src;
            image.classList.remove("lazy");
            imageObserver.unobserve(image);
          }
        });
      },
      {
        root: document.querySelector(".container"),
        rootMargin: "0px 0px 500px 0px",
      }
    );

    lazyloadImages.forEach(function (image) {
      imageObserver.observe(image);
    });
  }
};
