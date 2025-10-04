function navAnimation() {

    window.addEventListener("load", () => {
        setTimeout(() => {
            // Animate UL LI separately
            const timeline = gsap.timeline();

            timeline.fromTo(
                "ul li",
                {
                    y: "200%",
                    opacity: 0
                },
                {
                    y: "0%",
                    opacity: 1,
                    duration: 0.8,
                    ease: "power1.inOut",
                    stagger: 0.2
                }
            );
        }, 10); 
    });
}

navAnimation();
