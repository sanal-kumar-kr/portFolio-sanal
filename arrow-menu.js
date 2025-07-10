  const toggleBtn = document.getElementById('toggleCircleNav');
  const menu = document.getElementById('circleMenu');
const scrollToggle = document.getElementById("scrollToggle");
  const scrollIcon = document.getElementById("scrollIcon");

  let atBottom = false;

  toggleBtn.addEventListener('click', () => {
    const icon = toggleBtn.querySelector('i');
    if (menu.style.display === "block") {
      menu.style.display = "none";
      toggleBtn.classList.remove('rotate');
      icon.classList.remove('bi-x');
      icon.classList.add('bi-arrow-down-short');
    } else {
      menu.style.display = "block";
      toggleBtn.classList.add('rotate');
      icon.classList.remove('bi-arrow-down-short');
      icon.classList.add('bi-x');
    }
  });

    scrollToggle.addEventListener("click", function (e) {
    e.preventDefault(); // prevent default anchor behavior

    if (!atBottom) {
      // Scroll to footer
      document.getElementById("footer").scrollIntoView({ behavior: "smooth" });

      // Change to up icon and #index
      scrollToggle.setAttribute("href", "#navigation");
      scrollIcon.classList.remove("bi-arrow-down-short");
      scrollIcon.classList.add("bi-arrow-up-short");
      atBottom = true;
    } else {
      // Scroll to index
      document.getElementById("navigation").scrollIntoView({ behavior: "smooth" });

      // Change back to down icon and #footer
      scrollToggle.setAttribute("href", "#footer");
      scrollIcon.classList.remove("bi-arrow-up-short");
      scrollIcon.classList.add("bi-arrow-down-short");
      atBottom = false;
    }
  });