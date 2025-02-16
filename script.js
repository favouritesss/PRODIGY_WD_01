// Function to detect scroll and add a 'scrolled' class to navbar
window.onscroll = function() {
    var navbar = document.getElementById("navbar");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
};

// Function to toggle the hamburger menu
const hamburger = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");
const closeBtn = document.getElementById("close-btn");
const navbar = document.getElementById("navbar");

hamburger.addEventListener("click", () => {
    navbar.classList.add("active");
    closeBtn.style.display = "block"; // Show close icon when menu is open
    hamburger.style.display = "none"; // Hide hamburger icon
});

closeBtn.addEventListener("click", () => {
    navbar.classList.remove("active");
    closeBtn.style.display = "none"; // Hide close icon when menu is closed
    hamburger.style.display = "flex"; // Show hamburger icon
});
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".sub-sec");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("show");
                }, 2000); // 2-second delay before animation starts
                observer.unobserve(entry.target); // Stop observing after animation triggers
            }
        });
    }, { threshold: 0.2 }); // Triggers when 20% of the section is visible

    sections.forEach(section => observer.observe(section));
});
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");
    const button = document.querySelector(".contact-form button");
    const inputs = form.querySelectorAll("input, textarea");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        let isValid = true; // Validation flag

        // Clear previous error messages
        form.querySelectorAll(".error-message").forEach(msg => msg.remove());

        // Validate each input field
        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                showError(input, "This field is required");
            }
        });

        if (!isValid) return; // Stop if validation fails

        // Simulate button loading effect
        button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        button.disabled = true; 

        // Simulate sending delay
        setTimeout(() => {
            alert("Message sent successfully!");
            button.innerHTML = "Send Message";
            button.disabled = false;
            form.reset(); // Clear form fields
        }, 2000);
    });

    // Function to show error messages
    function showError(input, message) {
        const errorMsg = document.createElement("small");
        errorMsg.textContent = message;
        errorMsg.classList.add("error-message");
        errorMsg.style.color = "red";
        errorMsg.style.display = "block";
        errorMsg.style.marginTop = "-10px";
        input.insertAdjacentElement("afterend", errorMsg);
    }
});
