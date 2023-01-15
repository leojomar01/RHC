const AT = document.getElementById('AT');

AT.addEventListener('change', (event) => {

  const c1r1 = document.querySelector('.c1r1');
  c1r1.textContent = 100 + (4.5 * event.target.value);

  const c2r1 = document.querySelector('.c2r1');
  c2r1.textContent = 500 + (40.5 * event.target.value * 2);

  const c3r1 = document.querySelector('.c3r1');
  c3r1.textContent = 500 * (.5 * event.target.value * 2);

  const c4r1 = document.querySelector('.c4r1');
  c4r1.textContent = event.target.value;

  const c5r1 = document.querySelector('.c5r1');
  c5r1.textContent = 200 *event.target.value + (.5 * event.target.value * 2);

});