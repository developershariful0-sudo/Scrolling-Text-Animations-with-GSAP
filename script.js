function marqueAnimation() {
    let currentDirection = "down";
    // এই ভ্যালু যত বেশি হবে, অ্যানিমেশন তত স্লো (ধীর) হবে
    const duration = 10;

    // Initial animation so it runs immediately on page load
    gsap.to(".marque", {
        transform: "translateX(-200%)",
        repeat: -1,
        duration: duration,
        ease: "none"
    });

    gsap.to(".marque img", {
        rotate: 180
    });

    window.addEventListener("wheel", function (dets) {
        if (dets.deltaY > 0) {
            // Scroll down
            if (currentDirection !== "down") {
                currentDirection = "down";
                gsap.to(".marque", {
                    transform: "translateX(-200%)",
                    repeat: -1,
                    duration: duration,
                    ease: "none"
                });

                gsap.to(".marque img", {
                    rotate: 180
                });
            }
        } else if (dets.deltaY < 0) {
            // Scroll up
            if (currentDirection !== "up") {
                currentDirection = "up";
                gsap.to(".marque", {
                    transform: "translateX(0%)",
                    repeat: -1,
                    duration: duration,
                    ease: "none"
                });

                gsap.to(".marque img", {
                    rotate: 0
                });
            }
        }
    });
}

marqueAnimation();
