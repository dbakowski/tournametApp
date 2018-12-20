(function () {
  var position = document.querySelector('#position');
  var title = document.querySelector('#title');
  var body = document.querySelector('#body');

  document.querySelector('#submit').addEventListener('click', function (event) {
    let valid = true;

    if (position.value.length < 1) {
      position.classList.add('is-invalid');
      valid = false;
    } else {
      position.classList.remove('is-invalid');
    }

    if (title.value.length < 1) {
      title.classList.add('is-invalid');
      valid = false;
    } else {
      title.classList.remove('is-invalid');
    }

    if (body.value.length < 1) {
      body.classList.add('is-invalid');
      valid = false;
    } else {
      body.classList.remove('is-invalid');
    }

    if (!valid) {
      event.preventDefault()
    }
  });
})();
