const views = document.querySelectorAll('.auth-view');
const switchLinks = document.querySelectorAll('.switch-view');
const forms = document.querySelectorAll('.auth-form');

function showView(viewId) {
  views.forEach((view) => {
    const isTarget = view.id === viewId;
    view.classList.toggle('is-active', isTarget);
    view.setAttribute('aria-hidden', String(!isTarget));
  });
}

switchLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    showView(link.dataset.target);
  });
});

forms.forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
  });
});
