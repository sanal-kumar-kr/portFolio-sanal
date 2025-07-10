function rotateCarousel(containerId, interval = 5000) {
    const container = document.getElementById(containerId);
    const cards = container.querySelectorAll(".carousel-card");
    let index = 0;

    function updateCarousel() {
      cards.forEach((card, i) => {
        card.classList.remove("active", "left", "right");
        if (i === index) {
          card.classList.add("active");
        } else if (i === (index + 1) % cards.length) {
          card.classList.add("right");
        } else if (i === (index - 1 + cards.length) % cards.length) {
          card.classList.add("left");
        }
      });
    }

    updateCarousel();

    setInterval(() => {
      index = (index + 1) % cards.length;
      updateCarousel();
    }, interval);
  }

  // Initialize on page load
  document.addEventListener("DOMContentLoaded", function () {
    rotateCarousel("carousel-frontend");
        rotateCarousel("carousel-backend");  // 👈 Add this line
rotateCarousel("carousel-tools"); // 👈 Add this line

  });