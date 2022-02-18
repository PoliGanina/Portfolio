const   hamburger = document.querySelector ('.hamburger'),
        menu = document.querySelector ('.menu'),
        closeElem = document.querySelector ('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const   percents = document.querySelectorAll('.percent__item-number'),
        lines = document.querySelectorAll('.percent__item-scale2');

percents.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});

// // Form Validation

// function validateForm(form) {
//     $(form).validate({
//         rules: {
//             name: {
//                 required: true,
//                 minlength: 2,
//             },
//             email: {
//                 required: true,
//                 email: true
//             }
//         },
//         messages: {
//             name: {
//                 required: "Please enter your name",
//                 minlength: jQuery.validator.format("Should contain at least {0} symbols")
//             },
//             email: {
//                 required: "Please enter your email",
//                 email: "Please enter the format name@domain.com"
//             },
//         },
//         errorPlacement: function (error, element) {
//             error.insertAfter(element);
//           }
//     });
// };

// validateForm('.contacts__form');

// $('form').submit(function(e) {
//     e.preventDefault();

//     //чтобы пустые значения формы не отправлялись
//     if (!$(this).valid()){
//         return;
//     }

//     $.ajax({
//         type: "POST",
//         url: "mailer/smart.php",
//         data: $(this).serialize()
//     }).done(function(){
//         $(this).find("input").val("");
//         $('form').trigger('reset');
//     });
//     return false;
// });
