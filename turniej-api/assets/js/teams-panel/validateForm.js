(function () {
  var name = document.querySelector('#name');

  document.querySelector('#submit').addEventListener('click', function (event) {
    let valid = true;

    if (name.value.length < 1) {
      name.classList.add('is-invalid');
      valid = false;
    } else {
      name.classList.remove('is-invalid');
    }

    if (!valid) {
      event.preventDefault()
    }
  });
})();
