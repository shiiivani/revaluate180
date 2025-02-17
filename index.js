document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = this.querySelector("[name='name']").value.trim();
    const email = this.querySelector("[name='email']").value.trim();
    const phone = this.querySelector("[name='phone-number']").value.trim();
    const company = this.querySelector("[name='company']").value.trim();
    const job = this.querySelector("[name='job']").value.trim();

    const nameError = this.querySelector(".name-error");
    const emailError = this.querySelector("email-error");
    const phoneError = this.querySelector(".phone-number-error");
    const companyError = this.querySelector(".company-error");
    const jobError = this.querySelector(".job-error");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "") {
      nameError.classList.remove("d-none");
      return;
    }
    if (email === "" || !emailRegex.test(email)) {
      emailError.classList.remove("d-none");
      return;
    }
    if (
      phone !== "" &&
      (isNaN(phone) || phone.length < 10 || phone.length > 10)
    ) {
      phoneError.classList.remove("d-none");
      return;
    }
    if (company === "") {
      companyError.classList.remove("d-none");
      return;
    }
    if (job === "") {
      jobError.classList.remove("d-none");
      return;
    }

    alert("Form submitted successfully!");
    e.target.submit();
  });
});

// Testimonial Slider
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".testimonial-slider");
  const slideRightBtn = document.getElementById("slideRightBtn");
  const slideLeftBtn = document.getElementById("slideLeftBtn");
  if (window.innerWidth > 400 && window.innerWidth < 450) {
    slideRightBtn.addEventListener("click", function () {
      slideLeftBtn.classList.remove("hidden");
      slider.scrollBy({
        left: 430,
        behavior: "smooth",
      });
    });

    slideLeftBtn.addEventListener("click", function () {
      slider.scrollBy({
        left: -430,
        behavior: "smooth",
      });
    });
  } else if (window.innerWidth < 400 && window.innerWidth > 380) {
    slideRightBtn.addEventListener("click", function () {
      slideLeftBtn.classList.remove("hidden");
      slider.scrollBy({
        left: 400,
        behavior: "smooth",
      });
    });

    slideLeftBtn.addEventListener("click", function () {
      slider.scrollBy({
        left: -400,
        behavior: "smooth",
      });
    });
  } else if (window.innerWidth < 380) {
    slideRightBtn.addEventListener("click", function () {
      slideLeftBtn.classList.remove("hidden");
      slider.scrollBy({
        left: 380,
        behavior: "smooth",
      });
    });

    slideLeftBtn.addEventListener("click", function () {
      slider.scrollBy({
        left: -380,
        behavior: "smooth",
      });
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  new Splide("#splideCarousel", {
    type: "loop",
    perPage: 1,
    perMove: 1,
    autoplay: true,
    interval: 3000,
    pagination: true,
    arrows: false,
  }).mount();
});
