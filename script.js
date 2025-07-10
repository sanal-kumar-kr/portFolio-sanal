  const cards = document.querySelectorAll('.card-experience');

  function revealCards() {
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        card.classList.add('reveal');
      }
    });
  }

  // Reveal on scroll or load
  window.addEventListener('scroll', revealCards);
  window.addEventListener('load', revealCards);

  // Always trigger on hashchange
  window.addEventListener('hashchange', () => {
    setTimeout(revealCards, 300);
  });

  // Extra: Listen to any click on #experience link
  document.querySelectorAll('a[href="#experience"]').forEach(link => {
    link.addEventListener('click', () => {
      // Scroll manually (force it to scroll slightly)
      window.scrollBy(0, -1); // tiny scroll to trigger scroll event
      setTimeout(() => {
        revealCards();
      }, 100);
    });
  });
