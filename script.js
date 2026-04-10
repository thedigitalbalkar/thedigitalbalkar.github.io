document.body.classList.add("loading");

const LOADER_DELAY = 1200;
const HERO_ANIMATION_DELAY = LOADER_DELAY + 120;

document.querySelectorAll(".nav-toggle").forEach((toggleButton) => {
    const nav = toggleButton.closest(".nav-section");

    if (!nav) {
        return;
    }

    const closeMenu = () => {
        nav.classList.remove("menu-open");
        toggleButton.setAttribute("aria-expanded", "false");
    };

    toggleButton.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("menu-open");
        toggleButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    nav.querySelectorAll(".nav-links a").forEach((link) => {
        link.addEventListener("click", () => {
            if (window.innerWidth <= 768) {
                closeMenu();
            }
        });
    });

    document.addEventListener("click", (event) => {
        if (window.innerWidth > 768) {
            return;
        }

        if (!nav.contains(event.target)) {
            closeMenu();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
});

window.addEventListener("load", () => {
    const loader = document.getElementById("page-loader");

    window.setTimeout(() => {
        if (loader) {
            loader.classList.add("hide");
        }
        document.body.classList.remove("loading");
    }, LOADER_DELAY);

    if (typeof gsap === "undefined") {
        return;
    }

    if (typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
    }

    const heroText = document.querySelector(".split-text");

    if (heroText) {
        window.setTimeout(() => {
            const originalHTML = heroText.innerHTML;
            let newHTML = "";

            originalHTML.split(/(<br\s*\/?>)/gi).forEach((part) => {
                if (part.match(/<br\s*\/?>/gi)) {
                    newHTML += part;
                    return;
                }

                part.split("").forEach((char) => {
                    newHTML += char === " " ? "<span>&nbsp;</span>" : `<span>${char}</span>`;
                });
            });

            heroText.innerHTML = newHTML;

            gsap.from(".split-text span", {
                opacity: 0,
                y: 28,
                stagger: 0.025,
                duration: 0.55,
                ease: "power3.out"
            });

            gsap.from(".home-text p", {
                opacity: 0,
                y: 20,
                delay: 0.12,
                duration: 0.55,
                ease: "power2.out"
            });

            gsap.from(".home-actions", {
                opacity: 0,
                y: 20,
                delay: 0.2,
                duration: 0.55,
                ease: "power2.out"
            });

            gsap.from(".home-image img", {
                opacity: 0,
                scale: 0.97,
                y: 16,
                duration: 0.7,
                ease: "power3.out"
            });
        }, HERO_ANIMATION_DELAY);
    }

    const animatedSections = [
        {
            target: ".section-header",
            options: {
                opacity: 0,
                y: 40,
                duration: 0.8,
                scrollTrigger: {
                    trigger: ".project-section",
                    start: "top 80%"
                }
            }
        },
        {
            target: ".project-item",
            options: {
                opacity: 0,
                y: 60,
                stagger: 0.18,
                duration: 0.9,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".project-section",
                    start: "top 75%"
                }
            }
        },
        {
            target: ".about-heading h2",
            options: {
                opacity: 0,
                y: 40,
                duration: 0.8,
                scrollTrigger: {
                    trigger: ".about-section",
                    start: "top 80%"
                }
            }
        },
        {
            target: ".about-content > *",
            options: {
                opacity: 0,
                y: 30,
                stagger: 0.12,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: ".about-content",
                    start: "top 85%"
                }
            }
        },
        {
            target: ".footer-info",
            options: {
                opacity: 0,
                y: 40,
                duration: 0.8,
                scrollTrigger: {
                    trigger: ".footer-section",
                    start: "top 85%"
                }
            }
        },
        {
            target: ".contact-form",
            options: {
                opacity: 0,
                y: 40,
                duration: 0.8,
                delay: 0.15,
                scrollTrigger: {
                    trigger: ".footer-section",
                    start: "top 85%"
                }
            }
        }
    ];

    animatedSections.forEach(({ target, options }) => {
        if (document.querySelector(target)) {
            gsap.from(target, options);
        }
    });

    if (typeof ScrollTrigger !== "undefined") {
        ScrollTrigger.refresh();
    }
});
