(function () {
  $('.delete').click(function () {
    deleteRecord(this);
  });
})();

function deleteRecord(elem) {
  elem = $(elem);
  var href = document.location.href.split('/view?id=');

  if (window.confirm('Czy na pewno chcesz usunąć rekord ' + elem.data('name') + '?')) {
    $.ajax({
      url: href[0] + "/delete",
      data: {id: elem.data('id')},
      type: 'POST',
      statusCode: {
        404: function () {
          alert("Nie znaleziono takiego rekordu");
        },
        200: function () {
          alert("Rekord został usunięty");

          if (isView) {
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
