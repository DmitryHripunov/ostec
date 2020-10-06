tabEl.forEach((menuBtn) => {
  menuBtn.addEventListener('click', function (e) {
    const tabItem = e.target.closest('.answer-list__questions');

    tabItem.classList.toggle('checked');
  });
});