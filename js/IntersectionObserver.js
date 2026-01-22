document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target); // se anima una sola vez
        }
      });
    },
    {
      threshold: 0.15
    }
  );

  elements.forEach(el => observer.observe(el));
});
