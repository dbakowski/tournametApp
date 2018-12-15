(function () {
  var nickname = document.querySelector('#nickname');
  var class_name = document.querySelector('#class-name');
  var team = document.querySelector('#team');

  document.querySelector('#submit').addEventListener('click', function (event) {
    let valid = true;

    if (nickname.value.length < 1) {
      nickname.classList.add('is-invalid');
      valid = false;
    } else {
      nickname.classList.remove('is-invalid');
    }

    if (class_name.value.length < 1) {
      class_name.classList.add('is-invalid');
      valid = false;
    } else {
      class_name.classList.remove('is-invalid');
    }

    if (team.value.length < 1) {
      team.classList.add('is-invalid');
      valid = false;
    } else {
      team.classList.remove('is-invalid');
    }

    if (!valid) {
      event.preventDefault()
    }
  });
})();
