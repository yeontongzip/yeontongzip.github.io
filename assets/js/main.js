/* ==========================================
   연통집 공식 홈페이지
   main.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       Header Scroll Effect
    ========================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 30) {

            header.style.boxShadow = "0 5px 20px rgba(0,0,0,.08)";

        } else {

            header.style.boxShadow = "none";

        }

    });


    /* ==========================
       Smooth Scroll
    ========================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        });

    });


    /* ==========================
       Scroll Animation
    ========================== */

    const items = document.querySelectorAll(

        ".feature-card, .problem-card, .product-card, .guide-step, .faq-item"

    );

    items.forEach(item => {

        item.style.opacity = "0";

        item.style.transform = "translateY(40px)";

        item.style.transition = ".6s ease";

    });

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform = "translateY(0)";

            }

        });

    }, {

        threshold: .15

    });

    items.forEach(item => observer.observe(item));

});