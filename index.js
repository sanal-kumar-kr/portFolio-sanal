const bgImage = document.getElementById("bgImage");
const card = document.getElementById("card");
const imageFront = document.getElementById("imageFront");
const imageBack = document.getElementById("imageBack");
const paginations = document.querySelector(".paginations");

// Project details
const projectDetails = [
  {
    title: "Task Management System",
    description: "The Admin and Staff Task Management System is designed to streamline project management by allowing admins and staff to effectively collaborate on projects, tasks, and subtasks. It provides tools for tracking progress, setting priorities, and managing deadlines, ensuring productivity and accountability The system is developed with a front-end powered by HTML, CSS, and JavaScript, ensuring a responsive and user-friendly interface. The back-end is built using CodeIgniter, a PHP framework known for its speed and flexibility, enabling robust and scalable operations.",
    link:"https://github.com/sanal-kumar-kr/Task-Management-System"
  },
  {
    title: "Empower Her Rise",
    description: "Description for Project 2",
    link:"https://github.com/sanal-kumar-kr/empower-her-rise"

  },
  {
    title: "Project 3",
    description: "Description for Project 3",
    link:"https://github.com/sanal-kumar-kr/Task-Management-System"

  },
  {
    title: "Project 4",
    description: "Description for Project 4",
    link:"https://github.com/sanal-kumar-kr/Task-Management-System"
  }
];

const images = [
  "./tms.png",
  "./ehr.png",
  "./evt.png",
];

let currentImageIndex = 0;
let previousImageIndex = currentImageIndex - 1;
let nextImageIndex = currentImageIndex + 1;
let currentRotation = 0;

imageFront.src = images[currentImageIndex];
imageBack.src = images[nextImageIndex];
bgImage.src = images[currentImageIndex];

// Create pagination buttons
images.forEach(() => {
  const pagiBtn = document.createElement("div");
  pagiBtn.classList.add("pagi-btn");
  paginations.appendChild(pagiBtn);
});

function updatePaginations() {
  const pagiButtons = document.querySelectorAll(".pagi-btn");

  if (pagiButtons) {
    pagiButtons.forEach((pagiBtn, index) => {
      if (currentImageIndex - 2 === index || currentImageIndex + 2 === index) {
        pagiBtn.style.transform = "scale(1.5)";
      } else if (
        currentImageIndex - 1 === index ||
        currentImageIndex + 1 === index
      ) {
        pagiBtn.style.transform = "scale(2)";
      } else {
        pagiBtn.style.transform = "scale(1)";
      }

      if (currentImageIndex === index) {
        pagiBtn.classList.add("active");
        pagiBtn.style.transform = "scale(3)";
      } else {
        pagiBtn.classList.remove("active");
      }
    });
  }
}

updatePaginations();

function updateImages(index) {
  if (currentImageIndex % 2 === 0) {
    imageFront.src = images[index];
  } else {
    imageBack.src = images[index];
  }

  bgImage.src = images[currentImageIndex];

  // Update title and description dynamically
  const cardTitle = document.querySelector('.card-title');
  const cardText = document.querySelector('.card-text');
  const cardLink = document.querySelector('.card-link');


  cardTitle.textContent = projectDetails[currentImageIndex].title;
  cardText.textContent = projectDetails[currentImageIndex].description;
  cardLink.textContent = projectDetails[currentImageIndex].link;
  cardLink.href= projectDetails[currentImageIndex].link;

}

function next() {
  if (currentImageIndex !== images.length - 1) {
    nextImageIndex = currentImageIndex + 1;
    currentImageIndex++;
    updateImages(nextImageIndex);
    updatePaginations();
    currentRotation -= 180;
    card.style.transform = `rotateY(${currentRotation}deg)`;
  }
}

function back() {
  if (currentImageIndex !== 0) {
    previousImageIndex = currentImageIndex - 1;
    currentImageIndex--;
    updateImages(previousImageIndex);
    updatePaginations();
    currentRotation += 180;
    card.style.transform = `rotateY(${currentRotation}deg)`;
  }
}