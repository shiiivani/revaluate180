document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone-number").value.trim();
  const company = document.getElementById("company").value.trim();
  const job = document.getElementById("job").value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name === "") {
    alert("Please enter your full name.");
    return;
  }
  if (email === "" || !emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }
  if (phone !== "" && (isNaN(phone) || phone.length < 10)) {
    alert("Please enter a valid phone number with at least 10 digits.");
    return;
  }
  if (company === "") {
    alert("Please enter your company name.");
    return;
  }
  if (job === "") {
    alert("Please enter your job title.");
    return;
  }

  alert("Form submitted successfully!");
  e.target.submit();
});

// Testimonial Slider
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".testimonial-slider");
  const slideRightBtn = document.getElementById("slideRightBtn");
  const slideLeftBtn = document.getElementById("slideLeftBtn");
  if (window.innerWidth > 900) {
    slideRightBtn.addEventListener("click", function () {
      slideLeftBtn.classList.remove("hidden");
      slider.scrollBy({
        left: 320,
        behavior: "smooth",
      });
    });

    slideLeftBtn.addEventListener("click", function () {
      slider.scrollBy({
        left: -320,
        behavior: "smooth",
      });
    });
  } else {
    slideRightBtn.addEventListener("click", function () {
      slideLeftBtn.classList.remove("hidden");
      slider.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    });

    slideLeftBtn.addEventListener("click", function () {
      slider.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    });
  }
});
