"use strict";
const form = document.querySelector(".contact-form");
const nameInput = document.querySelector(".name-input");
const subjectInput = document.querySelector(".subject-input");
const phoneInput = document.querySelector(".phone-input");
const emailInput = document.querySelector(".email-input");
const messageInput = document.querySelector(".message-input");

console.log("run");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = {
    name: nameInput.value,
    subject: subjectInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    messase: messageInput.value,
    Date: new Date(),
  };
  nameInput.value = subjectInput.value = emailInput.value = phoneInput.value = messageInput.value =
    "";
  try {
    await fetch(
      "https://portfolio-form-79625-default-rtdb.firebaseio.com/formSubmissions.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    alert("Form has been successfully submitted.");
  } catch (error) {
    alert("There was a problem in the form Submission. Please, try again.");
  }
});
