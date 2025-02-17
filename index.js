// document.querySelectorAll("form").forEach((form) => {
//   form.addEventListener("submit", async function (e) {
//     e.preventDefault();

//     const form = this;
//     const submitButton = form.querySelector("button[type='submit']");
//     const successAlert = form.querySelector(".success-alert");
//     const errorAlert = form.querySelector(".error-alert");

//     // Show loader inside the button & disable it
//     submitButton.innerHTML = `<div class="spinner-border" role="status"></div>`;
//     submitButton.disabled = true;

//     // Get form values
//     const name = form.querySelector("[name='name']").value.trim();
//     const email = form.querySelector("[name='email']").value.trim();
//     const phone = form.querySelector("[name='phone-number']").value.trim();
//     const company = form.querySelector("[name='company']").value.trim();
//     const job = form.querySelector("[name='job']").value.trim();

//     // Select error elements
//     const nameError = form.querySelector(".name-error");
//     const emailError = form.querySelector(".email-error");
//     const phoneError = form.querySelector(".phone-number-error");
//     const companyError = form.querySelector(".company-error");
//     const jobError = form.querySelector(".job-error");

//     // Clear previous errors
//     nameError.classList.add("d-none");
//     emailError.classList.add("d-none");
//     phoneError.classList.add("d-none");
//     companyError.classList.add("d-none");
//     jobError.classList.add("d-none");

//     // Validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     let hasError = false;

//     if (name === "") {
//       nameError.classList.remove("d-none");
//       setTimeout(() => {
//         nameError.classList.add("d-none");
//       }, 2000);
//       hasError = true;
//     }
//     if (email === "" || !emailRegex.test(email)) {
//       emailError.classList.remove("d-none");
//       setTimeout(() => {
//         emailError.classList.add("d-none");
//       }, 2000);
//       hasError = true;
//     }
//     if (phone !== "" && (isNaN(phone) || phone.length < 10)) {
//       setTimeout(() => {
//         emailError.classList.add("d-none");
//       }, 2000);
//       phoneError.classList.remove("d-none");
//       hasError = true;
//     }
//     if (company === "") {
//       companyError.classList.remove("d-none");
//       setTimeout(() => {
//         companyError.classList.add("d-none");
//       }, 2000);

//       hasError = true;
//     }
//     if (job === "") {
//       jobError.classList.remove("d-none");
//       setTimeout(() => {
//         jobError.classList.add("d-none");
//       }, 2000);

//       hasError = true;
//     }

//     if (hasError) {
//       submitButton.innerHTML = "Submit";
//       submitButton.disabled = false;
//       return;
//     }

//     // Send data via POST request
//     const endpoint = "https://training.revaluate180.com/create-lead/";
//     const formData = { name, email, phone, company, job };

//     try {
//       const response = await fetch(endpoint, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to send email");
//       }

//       successAlert.classList.add("active");

//       setTimeout(() => {
//         successAlert.classList.remove("active");
//       }, 2000);
//       form.reset();
//     } catch (error) {
//       errorAlert.classList.add("active");
//       setTimeout(() => {
//         errorAlert.classList.remove("active");
//       }, 2000);
//     } finally {
//       submitButton.innerHTML = "Submit";
//       submitButton.disabled = false;
//     }
//   });
// });

document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const form = this;
    const submitButton = form.querySelector("button[type='submit']");
    const successAlert = form.querySelector(".success-alert");
    const errorAlert = form.querySelector(".error-alert");

    // Show loader inside the button & disable it
    submitButton.innerHTML = `<div class="spinner-border" role="status"></div>`;
    submitButton.disabled = true;

    // Get form values
    const name = form.querySelector("[name='name']").value.trim();
    const email = form.querySelector("[name='email']").value.trim();
    const phone = form.querySelector("[name='phone-number']").value.trim();
    const company = form.querySelector("[name='company']").value.trim();
    const job = form.querySelector("[name='job']").value.trim();

    // Select error elements
    const nameError = form.querySelector(".name-error");
    const emailError = form.querySelector(".email-error");
    const phoneError = form.querySelector(".phone-number-error");
    const companyError = form.querySelector(".company-error");
    const jobError = form.querySelector(".job-error");

    // Clear previous errors
    nameError.classList.add("d-none");
    emailError.classList.add("d-none");
    phoneError.classList.add("d-none");
    companyError.classList.add("d-none");
    jobError.classList.add("d-none");

    // Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let hasError = false;

    if (name === "") {
      nameError.classList.remove("d-none");
      setTimeout(() => {
        nameError.classList.add("d-none");
      }, 2000);
      hasError = true;
    }
    if (email === "" || !emailRegex.test(email)) {
      emailError.classList.remove("d-none");
      setTimeout(() => {
        emailError.classList.add("d-none");
      }, 2000);
      hasError = true;
    }
    if (phone !== "" && (isNaN(phone) || phone.length < 10)) {
      phoneError.classList.remove("d-none");
      setTimeout(() => {
        phoneError.classList.add("d-none");
      }, 2000);
      hasError = true;
    }
    if (company === "") {
      companyError.classList.remove("d-none");
      setTimeout(() => {
        companyError.classList.add("d-none");
      }, 2000);
      hasError = true;
    }
    if (job === "") {
      jobError.classList.remove("d-none");
      setTimeout(() => {
        jobError.classList.add("d-none");
      }, 2000);
      hasError = true;
    }

    if (hasError) {
      submitButton.innerHTML = "Submit";
      submitButton.disabled = false;
      return;
    }

    // Send data via POST request
    const endpoint = "https://training.revaluate180.com/create-lead/";
    console.log(formData);

    const recaptchaToken = await grecaptcha.execute(
      "6Ld4v9kqAAAAAK94dLOXPjcXr_pxdMSlKZ9vGEVn",
      { action: "submit" }
    );

    const formData = {
      name,
      email,
      phone,
      company,
      job,
      recaptcha_token: recaptchaToken,
    };
    // Get the token (assuming it's stored in localStorage)
    // const token = localStorage.getItem("authToken");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      successAlert.classList.add("active");
      setTimeout(() => {
        successAlert.classList.remove("active");
      }, 2000);
      form.reset();
    } catch (error) {
      errorAlert.classList.add("active");
      setTimeout(() => {
        errorAlert.classList.remove("active");
      }, 2000);
    } finally {
      submitButton.innerHTML = "Submit";
      submitButton.disabled = false;
    }
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
