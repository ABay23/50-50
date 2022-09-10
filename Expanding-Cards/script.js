const activeOn = document.querySelectorAll('.panel');

activeOn.forEach((pan) => {
  pan.addEventListener('click', () => {
    removeActive();
    pan.classList.add('active');
  });
});

const removeActive = (pan) => {
  activeOn.forEach((pan) => {
    pan.classList.remove('active');
  });
};
