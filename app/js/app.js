let dropDownContent = document.querySelectorAll(".faq_dropdown_controls");
let dropDownControl = document.querySelectorAll(".faq_dropdown_controls");

dropDownContent.forEach((question) => {
  question.addEventListener("click", () => {
    const questionActive = document.querySelector(
      ".faq_dropdown_controls.active"
    );

    if (questionActive && questionActive !== question) {
      questionActive.classList.toggle("active");
      questionActive.nextElementSibling.style.maxHeight = 0;
    }

    question.classList.toggle("active");
    const textContent = question.nextElementSibling;
    if (question.classList.contains("active")) {
      textContent.style.maxHeight = textContent.scrollHeight + "px";
    } else {
      textContent.style.maxHeight = 0;
    }
  });
  question.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
      const questionActive = document.querySelector(
        ".faq_dropdown_controls.active"
      );

      if (questionActive && questionActive !== question) {
        questionActive.classList.toggle("active");
        questionActive.nextElementSibling.style.maxHeight = 0;
      }

      question.classList.toggle("active");
      const textContent = question.nextElementSibling;
      if (question.classList.contains("active")) {
        textContent.style.maxHeight = textContent.scrollHeight + "px";
      } else {
        textContent.style.maxHeight = 0;
      }
    }
  });
});
