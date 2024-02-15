
import { useEffect } from "react";
import dynamic from 'next/dynamic'; // Import dynamic from next/dynamic

import ScrollReveal from "scrollreveal";


const ScrollRevealComponent = () => {
  
  useEffect(() => {
    if (typeof window !== "undefined") {
      const sr = ScrollReveal({
        reset: true,
        distance: "6rem",
        duration: 2500,
        delay: 400,
      });

      sr.reveal(".section_quality__data", { delay: 500, origin: "top" });

      const counters = document.querySelectorAll(".counter");

      
      const observer = new IntersectionObserver(
        (entries) =>
          entries.forEach(
            (entry) => entry.isIntersecting && animate(entry.target)
          ),
        {
          threshold: 1,
        }
      );

      function animate(counter) {
        let initial_count = 0;
        const final_count = counter.dataset.count;

        let counting = setInterval(updateCounting, 1);

        function updateCounting() {
          if (initial_count < 1000) {
            initial_count += 5;
            counter.innerText = initial_count;
          }

          if (initial_count >= 1000) {
            initial_count += 100;
            counter.innerText = (initial_count / 1000).toFixed(1) + "K+";
          }

          if (initial_count >= 1000000) {
            initial_count += 500000;
            counter.innerText = (initial_count / 1000000).toFixed(1) + "M+";
          }

          if (initial_count >= final_count) {
            clearInterval(counting);
          }
        }
      }

      counters.forEach((c) => observer.observe(c));

      return () => {
        // Clean up code if needed
        observer.disconnect();
      };
    }
  }, []);

  return null;
};

export default ScrollRevealComponent;
