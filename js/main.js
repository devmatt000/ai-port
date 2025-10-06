// JS animations or dark mode toggle// GSAP animations
gsap.to(".section", {opacity:1, y:0, duration:1, stagger:0.3});
gsap.from("img", {opacity:0, y:-30, duration:1});
gsap.from("h1,h2,p,a", {opacity:0, y:30, duration:1, stagger:0.2});
