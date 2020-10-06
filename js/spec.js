specBtnEl.addEventListener('click', function (e) {
  e.preventDefault();

  bodyEl.classList.toggle('spec-open');
  focusFieldEl.focus();
});

  //кнопка закрыть модальное окно
specCloseEl.addEventListener('click', function (e) {
  e.preventDefault()
  bodyEl.classList.remove('spec-open');
});
  
  // клик вне окна
specElem.addEventListener('click', function (e) {
  if (!e.target.closest('.spec-content-js')) {
      bodyEl.classList.remove('spec-open');
  };
});

document.addEventListener('keydown', function (e) {
  if (e.target === "Escape" || e.target === "Esc" || e.keyCode === 27) {
    bodyEl.classList.remove('spec-open');

  };
});

const moreBtnEl = document.querySelector('.specificatins__more-js');
const seeAllEl = document.querySelector('.see-all');

moreBtnEl.addEventListener('click', function (e) {
  e.preventDefault();
  seeAllEl.style.display = 'block';
  moreBtnEl.remove();
});


