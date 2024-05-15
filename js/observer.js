document.addEventListener("DOMContentLoaded", function() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    },
    {
      rootMargin: '0px',
      threshold: [0, 0.1, 1],
    }
  );

  const textContainer = document.querySelector('#text-container');
  observer.observe(textContainer);
});
