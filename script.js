/* -- Glow effect -- */
// const blob = document.getElementById("blob");

// window.onpointermove = (event) => {
//   const { clientX, clientY } = event;

//   blob.animate(
//     {
//       left: `${clientX}px`,
//       top: `${clientY}px`,
//     },
//     { duration: 3000, fill: "forwards" }
//   );
// };

// const cards = document.querySelectorAll(".cardw");

// cards.forEach((card) => {
//   card.addEventListener("mouseenter", () => {
//     document.getElementById("blob").style.opacity = 0;
//   });

//   card.addEventListener("mouseleave", () => {
//     document.getElementById("blob").style.opacity = 0.8;
//   });
// });

// const ename = document.getElementById("name");
// const email = document.getElementById("email");
// const message = document.getElementById("message");
// function sendEmail() {
//   let ebody = `<b>Name:</b> ${ename.value} <br> <b>Email:</b> ${email.value} <br> <b>Message:</b> ${message.value}`;

//   Email.send({
//     SecureToken: "0ab09774-3d4a-4b8d-96b6-6b3ff3e51866",
//     To: "amaan14999@gmail.com",
//     From: "amaanlmc@gmail.com",
//     Subject: "NEW MESSAGE FROM " + email.value,
//     Body: ebody,
//   }).then((message) => alert("Sent"));
// }

const ename = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
function sendEmail() {
  let ebody = `<b>Name:</b> ${ename.value} <br> <b>Email:</b> ${email.value} <br> <b>Message:</b> ${message.value}`;

  Email.send({
    SecureToken: "0ab09774-3d4a-4b8d-96b6-6b3ff3e51866",
    To: "amaan14999@gmail.com",
    From: "amaanlmc@gmail.com",
    Subject: "NEW MESSAGE FROM " + email.value,
    Body: ebody,
  }).then((message) => alert("Message Sent 📧"));
}

const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("experience-active");
    });
    target.classList.add("experience-active");
    tabs.forEach((tab) => {
      tab.classList.remove("experience-active");
    });
    tab.classList.add("experience-active");
  });
});

const swiper = new Swiper(".swiper-slider", {
  // Optional parameters
  centeredSlides: true,
  slidesPerView: 1,
  grabCursor: true,
  freeMode: true,
  loop: true,
  mousewheel: {
    forceToAxis: true,
  },
  keyboard: {
    enabled: true,
  },

  // Enabled autoplay mode
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: false,
    clickable: true,
  },

  // If we need navigation
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Responsive breakpoints
  breakpoints: {
    580: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
  },
});
