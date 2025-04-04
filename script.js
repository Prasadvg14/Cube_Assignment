// document.addEventListener("DOMContentLoaded", function () {
//     console.log("JavaScript Loaded!");

//     // Example: Search box toggle functionality
//     const searchIcon = document.querySelector(".search-icon");
//     const searchBox = document.querySelector(".search-box");

//     if (searchIcon) {
//         searchIcon.addEventListener("click", function () {
//             searchBox.style.display = searchBox.style.display === "block" ? "none" : "block";
//         });
//     }
// });




// document.addEventListener("DOMContentLoaded", function () {
//     // Search Box Toggle
//     document.getElementById("search-icon").addEventListener("click", function () {
//         document.getElementById("search-box").classList.toggle("hidden");
//         document.getElementById("nav-ul").classList.toggle("hidden");
//     });

//     // Hamburger Menu Toggle
//     document.getElementById("hamburger").addEventListener("click", function () {
//         document.getElementById("menu").classList.toggle("hidden");
//     });

//     // Product Gallery
//     let currentImageIndex = 0;
//     const images = ["assets/img1.jpg", "assets/img2.jpg", "assets/img3.jpg"];
//     const mainImage = document.getElementById("main-image");
//     document.getElementById("prev").addEventListener("click", function () {
//         currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
//         mainImage.src = images[currentImageIndex];
//     });
//     document.getElementById("next").addEventListener("click", function () {
//         currentImageIndex = (currentImageIndex + 1) % images.length;
//         mainImage.src = images[currentImageIndex];
//     });
//     document.querySelectorAll(".thumb").forEach(thumb => {
//         thumb.addEventListener("click", function () {
//             mainImage.src = this.dataset.src;
//         });
//     });

//     // Add to Cart Link Update
//     function updateCartLink() {
//         const flavor = document.querySelector('input[name="flavor"]:checked')?.value || "default";
//         const purchase = document.querySelector('input[name="purchase"]:checked')?.value || "default";
//         document.getElementById("cart-link").href = `#cart-${flavor}-${purchase}`;
//     }
//     document.querySelectorAll("input[name='flavor'], input[name='purchase']").forEach(input => {
//         input.addEventListener("change", updateCartLink);
//     });

//     // Percentage Counter Animation
//     function animateCounters() {
//         document.querySelectorAll(".stats div").forEach(counter => {
//             const target = +counter.getAttribute("data-target");
//             let count = 0;
//             const interval = setInterval(() => {
//                 count += 1;
//                 counter.textContent = count + "%";
//                 if (count >= target) clearInterval(interval);
//             }, 20);
//         });
//     }
//     window.addEventListener("scroll", function () {
//         if (document.querySelector(".stats").getBoundingClientRect().top < window.innerHeight) {
//             animateCounters();
//         }
//     }, { once: true });

//     // FAQ Accordion
//     document.querySelectorAll(".faq-question").forEach(button => {
//         button.addEventListener("click", function () {
//             this.nextElementSibling.classList.toggle("hidden");
//         });
//     });
// });



document.addEventListener("DOMContentLoaded", function () {
    // Search Box Toggle
    document.getElementById("search-icon").addEventListener("click", function () {
        document.getElementById("search-box").classList.toggle("hidden");
        document.getElementById("search-box").classList.toggle("fade-in");
    });

    // Hamburger Menu Toggle
    document.getElementById("hamburger").addEventListener("click", function () {
        document.getElementById("menu").classList.toggle("hidden");
        document.getElementById("menu").classList.toggle("slide-in");
    });

    // Product Gallery
    let currentImageIndex = 0;
    const images = ["assets/img1.jpg", "assets/img2.jpg", "assets/img3.jpg"];
    const mainImage = document.getElementById("main-image");
    document.getElementById("prev").addEventListener("click", function () {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        mainImage.src = images[currentImageIndex];
    });
    document.getElementById("next").addEventListener("click", function () {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        mainImage.src = images[currentImageIndex];
    });
    document.querySelectorAll(".thumb").forEach(thumb => {
        thumb.addEventListener("click", function () {
            mainImage.src = this.dataset.src;
        });
    });

    // Add to Cart Link Update
    function updateCartLink() {
        const flavor = document.querySelector('input[name="flavor"]:checked')?.value || "default";
        const purchase = document.querySelector('input[name="purchase"]:checked')?.value || "default";
        document.getElementById("cart-link").href = `#cart-${flavor}-${purchase}`;
    }
    document.querySelectorAll("input[name='flavor'], input[name='purchase']").forEach(input => {
        input.addEventListener("change", updateCartLink);
    });

    // Percentage Counter Animation
    function animateCounters() {
        document.querySelectorAll(".stats div").forEach(counter => {
            const target = +counter.getAttribute("data-target");
            let count = 0;
            const interval = setInterval(() => {
                count += 1;
                counter.textContent = count + "%";
                if (count >= target) clearInterval(interval);
            }, 20);
        });
    }
    window.addEventListener("scroll", function () {
        if (document.querySelector(".stats").getBoundingClientRect().top < window.innerHeight) {
            animateCounters();
        }
    }, { once: true });

    // FAQ Accordion
    document.querySelectorAll(".faq-question").forEach(button => {
        button.addEventListener("click", function () {
            this.nextElementSibling.classList.toggle("hidden");
            this.nextElementSibling.classList.toggle("fade-in");
        });
    });
});


window.addEventListener("scroll", function () {
    const section = document.querySelector(".fade-in-section");
    if (section.getBoundingClientRect().top < window.innerHeight - 100) {
        section.classList.add("visible");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const reviewCards = document.querySelectorAll(".review-card");

    function revealOnScroll() {
        reviewCards.forEach(card => {
            const rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                card.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Run on load in case cards are already in view
});


document.querySelectorAll(".faq-item").forEach(item => {
    item.addEventListener("click", () => {
        const answer = item.nextElementSibling;
        answer.classList.toggle("show");
    });
});
window.addEventListener("scroll", function () {
    const subSec = document.querySelector(".subscription");
    const position = subSec.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
        subSec.classList.add("animate");
    }
});