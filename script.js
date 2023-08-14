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
