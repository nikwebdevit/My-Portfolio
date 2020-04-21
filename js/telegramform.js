$(document).ready(function () {
  $(".form-element").submit(function () {
    var formID = $(this).attr('id');
    var formNm = $('#' + formID);
    $.ajax({
      type: "POST",
      url: '../php/telegram.php',
      data: formNm.serialize(),
      success: function (data) {
        // Вывод сообщения об успешной отправке
        $('.form-message__success').slideDown({
          duration: 100,
          start: function () {
            $(this).css({
              display: 'flex'
            })
          }
        });
        $('.order-button__width').attr('disabled', 'disabled');
      },
      error: function (error) {
        // Вывод сообщения об ошибке отправки
        $('.form-message__error').slideDown({
          duration: 100,
          start: function () {
            $(this).css({
              display: 'flex'
            })
          }
        });
      }
    });
    return false;
  });

  $(".contact__form").submit(function () {
    var formID = $(this).attr('id');
    var formNm = $('#' + formID);
    $.ajax({
      type: "POST",
      url: '../php/telegram_contact.php',
      data: formNm.serialize(),
      success: function (data) {
        // Вывод сообщения об успешной отправке
        $('.form-message__success').slideDown({
          duration: 100,
          start: function () {
            $(this).css({
              display: 'flex'
            })
          }
        });
        $('.contact__submit').attr('disabled', 'disabled');
      },
      error: function (error) {
        // Вывод сообщения об ошибке отправки
        $('.form-message__error').slideDown({
          duration: 100,
          start: function () {
            $(this).css({
              display: 'flex'
            })
          }
        });
      }
    });
    return false;
  });
});