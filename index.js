const intropart = document.getElementById('intropart').querySelector('h1');

// Set initial position to -100vw (off the left side)
gsap.set(intropart, {
  x: "-100vw"
});

// Animate to 100vw (off the right side)
gsap.to(intropart, {
  x: "100vw",
  duration: 15,
  delay: 0.25,
  repeat: -1,
  ease: "linear"
});

  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray('.card').forEach((card, i) => {
    gsap.fromTo(card, 
      { x: -150, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        delay: 0.25,
        duration: 2,
        ease: "power1.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%", 
          toggleActions: "play reset play reset", 
          
        }
      }
    );
  });
  gsap.registerPlugin(ScrollTrigger);
  const intro = document.querySelector("intro")
    gsap.fromTo(intro, 
      { x: -100, opacity: 0 },
      {
        x: 158,
        opacity: 1,
        delay: 1,
        duration: 3,
        ease: "linear",
        scrollTrigger: {
          trigger: intro,
          start: "top 80%", 
          toggleActions: "play reset play reset", 
          
        }
      }
    );

    const borders = document.querySelectorAll(".border h1");

    borders.forEach((border) => {
      gsap.set(border, {
        x: -16,
        opacity: 0,
      });
    
      gsap.to(border, {
        x: 7,
        duration: 2,
        delay: 0.5,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: border,
          start: "top 80%",
          toggleActions: "play reset play reset",
        },
      });
    });
 
    const nav = document.querySelector("nav")

    gsap.set(nav, {
      x: -16,
      opacity: 0,
    });
  
    gsap.to(nav, {
      x: 7,
      duration: 1,
      delay: 0.25,
      opacity: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: nav,
        start: "top 80%",
        toggleActions: "play reset play reset",
      },
    });
    const introo = document.querySelector(".intro")

    gsap.set(introo, {
      x: -16,
      opacity: 0,
    });
  
    gsap.to(introo, {
      x: 7,
      duration: 2,
      delay: 0.5,
      opacity: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: introo,
        start: "top 80%",
        toggleActions: "play reset play reset",
      },
    });



document.getElementById('listitem').addEventListener('click', function() {
  document.querySelector('.navhidden').classList.toggle('active');
});

// ScrollTrigger animations for cards
gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray('.card').forEach(card => {
  gsap.from(card, {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: card,
      start: "top bottom-=100",
      toggleActions: "play none none none"
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const connectBtn = document.getElementById('connectBtn');
  const socialIcons = document.getElementById('socialIcons');
  
  // Toggle social icons visibility with animation
  connectBtn.addEventListener('click', function() {
    socialIcons.classList.toggle('show');
    
    // Add staggered animation if showing icons
    if (socialIcons.classList.contains('show') && window.gsap) {
      gsap.from('.circle', {
        duration: 0.5,
        opacity: 0,
        y: 20,
        stagger: 0.1,
        ease: "power2.out"
      });
    }
  });
});




    
 




