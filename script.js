// loader

window.addEventListener("load", () => {
    const loader = document.getElementById("page-loader");
    setTimeout(() => {
        loader.classList.add("hide");
    }, 2000); // 2 seconds
});

document.body.classList.add("loading");

window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("page-loader").classList.add("hide");
        document.body.classList.remove("loading");
    }, 3000);
});


gsap.registerPlugin(ScrollTrigger);

// LOADER CODE (already present)
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("page-loader").classList.add("hide");
    }, 3000);
});

// GSAP DELAYED ANIMATIONS (ADD THIS BELOW)
window.addEventListener("load", () => {

    setTimeout(() => {

        /* HERO SECTION*/

        // Split-text animation 
        const textElement = document.querySelector(".split-text");
        const originalHTML = textElement.innerHTML;
        let newHTML = "";

        originalHTML.split(/(<br\s*\/?>)/gi).forEach(part => {
            if (part.match(/<br\s*\/?>/gi)) {
                newHTML += part;
            } else {
                part.split("").forEach(char => {
                    newHTML += char === " "
                        ? `<span>&nbsp;</span>`
                        : `<span>${char}</span>`;
                });
            }
        });

        textElement.innerHTML = newHTML;

        gsap.from(".split-text span", {
            opacity: 0,
            y: 40,
            stagger: 0.05,
            duration: 0.9,
            ease: "power3.out"
        });

        gsap.from(".home-text p", {
            opacity: 0,
            y: 30,
            delay: 0.4,
            duration: 0.8,
            ease: "power2.out"
        });

        gsap.from(".home-actions", {
            opacity: 0,
            y: 30,
            delay: 0.6,
            duration: 0.8,
            ease: "power2.out"
        });

        gsap.from(".home-image img", {
            opacity: 0,
            scale: 0.95,
            duration: 1,
            ease: "power3.out"
        });

        /* -------------------------
           PROJECT SECTION
        -------------------------- */

        gsap.from(".section-header", {
            opacity: 0,
            y: 40,
            duration: 0.8,
            scrollTrigger: {
                trigger: ".project-section",
                start: "top 80%"
            }
        });

        gsap.from(".project-item", {
            opacity: 0,
            y: 60,
            stagger: 0.2,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".project-item",
                start: "top 85%"
            }
        });

        /* -------------------------
           ABOUT SECTION
        -------------------------- */

        gsap.from(".about-heading h2", {
            opacity: 0,
            y: 40,
            duration: 0.8,
            scrollTrigger: {
                trigger: ".about-section",
                start: "top 80%"
            }
        });

        gsap.from(".about-content > *", {
            opacity: 0,
            y: 30,
            stagger: 0.15,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".about-content",
                start: "top 85%"
            }
        });

        /* -------------------------
           FOOTER
        -------------------------- */

        gsap.from(".footer-info", {
            opacity: 0,
            y: 40,
            duration: 0.8,
            scrollTrigger: {
                trigger: ".footer-section",
                start: "top 85%"
            }
        });

        gsap.from(".contact-form", {
            opacity: 0,
            y: 40,
            duration: 0.8,
            delay: 0.2,
            scrollTrigger: {
                trigger: ".footer-section",
                start: "top 85%"
            }
        });

        ScrollTrigger.refresh();

    }, 2000);
});
