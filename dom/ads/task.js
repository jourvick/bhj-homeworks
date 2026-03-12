const rotators = document.querySelectorAll('.rotator');

rotators.forEach(rotator => {
  const cases = rotator.querySelectorAll('.rotator__case');

  setInterval(() => {
    const active = rotator.querySelector('.rotator__case_active');
    let next = active.nextElementSibling;

    active.classList.remove('rotator__case_active');

    if (!next) {
      next = cases[0];
    }

    next.classList.add('rotator__case_active');
  }, 1000);
});
