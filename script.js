let darkmode = document.querySelector('#darkmode');
let downarrow = document.querySelector('.down-arrow');

darkmode.onclick = () => {
  if (darkmode.classList.contains('bx-moon')) {
    darkmode.classList.replace('bx-moon', 'bx-sun');
    document.body.classList.add('color');
  } else {
    darkmode.classList.replace('bx-sun', 'bx-moon');
    document.body.classList.remove('color');
  }
}

downarrow.onclick = () => {
  var height = document.body.scrollHeight;
    window.scroll(0 , height);
}


const sr = ScrollReveal({
  distance: '70px',
  duration: 2500,
  rest: true,
});

sr.reveal('.hero-text', { delay: 250, origin: 'bottom' });
sr.reveal('.hero-in', { delay: 200, origin: 'right' });
sr.reveal('.hero-img', { delay: 350, origin: 'right' });
sr.reveal('.down-arrow', { delay: 450, origin: 'top' });