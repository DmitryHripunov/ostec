$('.text-input-js').focusin(function () {
    $(this).siblings('.form-label-js').addClass('form-label--focused');
    $(this).parent('.input-js').addClass('input-active');
  });

  $('.text-input-js').focusout(function () {
    var input = $(this),
      inputEl = input.siblings('.form-label-js');
    '' === input.val() && inputEl.removeClass('form-label--focused');
    input.parent('.input-js').removeClass('input-active')
  });

  // form
  $('.form').each(function () {
    $('.tel').inputmask({ 
      'mask': '+7(999)999-99-99', 
      showMaskOnHover: false 
    });
  
    $.validator.addMethod('checkMask', function (value, element) {
      return /\+\d{1}\(\d{3}\)\d{3}-\d{2}-\d{2}/g.test(value); 
    });
  
      $(this).validate({
      errorPlacement(error, element) {
        return true;
      },
      focusInvalid: false,
      rules: {
        Почта: {
          required: true,
          email: true
        },
        Имя: {
          required: true,
          minlength: 3  
        },
        Организация: {
          required: true,
          minlength: 3 
        },
        Телефон: {
          required: true,
          checkMask: true, 
        },
        Соглашение: {
          required: true,
        }
      },
      submitHandler(form) {
        let th = $(form);
  
        $.ajax({
        type: 'POST',
        url: 'mail.php',
        data: th.serialize(),
        }).done(() => {
  
        // $('body').addClass('success-send-open');
        $('body').removeClass('modal-open');
        // $('body').on('click', function() {
        //   $('body').removeClass('success-send-open');
        // });
  
        th.trigger('reset');
      });
  
      return false;
      }
    });
  });
      