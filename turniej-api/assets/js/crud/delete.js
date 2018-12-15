(function () {
  $('.delete').click(function () {
    deleteRecord(this);
  });
})();

function deleteRecord(elem) {
  elem = $(elem);

  if (window.confirm('Czy na pewno chcesz usunąć usera ' + elem.data('nick') + '?')) {
    $.ajax({
      url: "/players-panel/delete",
      data: {id: elem.data('id')},
      type: 'POST',
      statusCode: {
        404: function () {
          alert("Nie znaleziono takiego gracza");
        },
        200: function () {
          alert("Gracz został usunięty");

          if (isView) {
            var href = document.location.href.split('/view?id=');
            document.location.href = href[0];
          } else {
            document.location.reload();
          }
        }
      }
    });
  }

  return true;
}
