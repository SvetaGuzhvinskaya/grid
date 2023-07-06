document.addEventListener('DOMContentLoaded', function () {
  // Btn menu
  document.querySelector(".js-open").addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(".js-menu").classList.toggle("is-open");
    document.querySelector("body").classList.toggle("menu-is-open");
  });

  document.querySelector(".js-close").addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(".js-menu").classList.toggle("is-open");
    document.querySelector("body").classList.toggle("menu-is-open");
  });

    // menu
    const els = document.querySelectorAll(".main-nav__link");
    els.forEach((el) => {

      el.addEventListener("click", function () {

        if (window.innerWidth < 1000) {
          document.querySelector(".js-menu").classList.toggle("is-open");
          document.querySelector("body").classList.toggle("menu-is-open");
        }
      });
    });


  document.querySelector("#contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = this.name.value;
    const email = this.email.value;
    const send = `mailto:blog@test.ru?body=Имя: ${name}%0D%0AE-mail: ${email}`;
    window.location.href = send;
  })

  const validatorNewsletter = new JustValidate(document.querySelector('#newsletterForm'), {
    errorLabelStyle: {
      color: '#F06666',
    }
  });

  validatorNewsletter
    .addField(document.querySelector('#emailNewsletter'), [
      {
        rule: 'required',
        errorMessage: 'Поле обязательно для заполнения',
      },
      {
        rule: 'required',
        errorMessage: 'Недопустимый формат',
      },
      {
        rule: 'email',
        errorMessage: 'Недопустимый формат',
      },
    ]);

  const validatorContact = new JustValidate(document.querySelector('#contactForm'), {
    errorLabelStyle: {
      color: '#F06666',
    }
  });

  validatorContact
    .addField(document.querySelector('#nameInput'), [
      {
        rule: 'required',
        errorMessage: 'Поле обязательно для заполнения',
      },
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Недопустимый формат',
      },
      {
        rule: 'maxLength',
        value: 15,
        errorMessage: 'Недопустимый формат',
      },
    ])
    .addField(document.querySelector('#emailInput'), [
      {
        rule: 'required',
        errorMessage: 'Поле обязательно для заполнения',
      },
      {
        rule: 'required',
        errorMessage: 'Недопустимый формат',
      },
      {
        rule: 'email',
        errorMessage: 'Недопустимый формат',
      },
    ]);
});
