const refs = {
  form: document.querySelector('form.form'),
};

refs.form.addEventListener('submit', onSubmitForm)

function onSubmitForm(e) {
  e.preventDefault();
  console.log(refs.form.children);
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
