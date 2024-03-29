const accordions = document.querySelectorAll('.faq-accordion');

accordions.forEach(el => {
  el.addEventListener('click', (e) => {
    const self = e.currentTarget;
    const control = self.querySelector('.faq-accordion__control');
    const content = self.querySelector('.faq-accordion__content');

    
    self.classList.toggle('open');
    console.log(self)

    // если открыт аккордеон
    if (self.classList.contains('open')) {
      control.setAttribute('aria-expanded', true);
      content.setAttribute('aria-hidden', false);
    } else {
      control.setAttribute('aria-expanded', false);
      content.setAttribute('aria-hidden', true);
    }
  });
});