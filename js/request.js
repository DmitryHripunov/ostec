requestBtnEl.forEach((button) => {

button.addEventListener('click', function (e) {
    e.preventDefault();

    bodyEl.classList.toggle('modal-open');
    focusFieldEl.focus();
  });

  // потестить клик по кнопке вернутся
  button.addEventListener('click', e => {
    const link = e.currentTarget;  
    history.pushState(null, null, link.href);
    // fancyPageLoad(link.href);  // "ajax"
    e.preventDefault();  // prevent page load
    e.stopPropagation();
  });
});

//кнопка закрыть модальное окно
modalCloseEl.addEventListener('click', function (e) {
  e.preventDefault()
  bodyEl.classList.remove('modal-open');
});

// клик вне окна
// requestElem.addEventListener('click', function (e) {
//   if (!e.target.closest('.form')) {
//     bodyEl.classList.remove('modal-open');
//   } 
// });

// клик вне esccape
document.addEventListener('keydown', function (e) {
  if (e.target === "Escape" || e.target === "Esc" || e.keyCode === 27) {
    bodyEl.classList.remove('modal-open');

  };
});



