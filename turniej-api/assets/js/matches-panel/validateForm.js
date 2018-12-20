(function () {
  const no = document.querySelector('#no');
  const date = document.querySelector('#date');
  const teamnameTop = document.querySelector('#teamnameTop');
  const teamnameBottom = document.querySelector('#teamnameBottom');

  console.log('dsds');

  document.querySelector('#submit').addEventListener('click', function (event) {
    let valid = true;

    if (no.value.length < 1) {
      no.classList.add('is-invalid');
      valid = false;
    } else {
      no.classList.remove('is-invalid');
    }

    if (date.value.length < 1) {
      date.classList.add('is-invalid');
      valid = false;
    } else {
      date.classList.remove('is-invalid');
    }
    
    if (teamnameTop.value.length < 1) {
      teamnameTop.classList.add('is-invalid');
      valid = false;
    } else {
      teamnameTop.classList.remove('is-invalid');
    }
    
    if (teamnameBottom.value.length < 1) {
      teamnameBottom.classList.add('is-invalid');
      valid = false;
    } else {
      teamnameBottom.classList.remove('is-invalid');
    }

    if (!valid) {
      event.preventDefault()
    }
  });
})();
