    //     // the "notfound" implements a catch-all
    //   // with page('*', notfound). Here we have
    //   // no catch-all, so page.js will redirect
    //   // to the location of paths which do not
    //   // match any of the following routes
    //   //
    //   page.base('/index');

    //   page('/', inicio);
    //   page('/mimuro', mimuro);
    //   page('/loginaccount', loginsocial);
    //   page('/newaccount', newaccount);
    // //   page('/contact/:contactName', contact);
    //   page();

    //   function inicio() {
    //     document.querySelector('#home-app')
    //       .innerHTML = 'viewing index';
    //   }

    //   function mimuro() {
    //     document.querySelector('#timeline-app')
    //       .innerHTML = 'viewing timeline';
    //   }

    //   function loginsocial() {
    //     document.querySelector('#access-screen')
    //     .innerHTML = 'viewing access screen';
    //   }

    //   function newaccount() {
    //     document.querySelector('#register-screen')
    //     .innerHTML = 'viewing register screen';
    //   }

    // //   function contact(ctx) {
    // //     document.querySelector('p')
    // //       .textContent = 'viewing contact ' + (ctx.params.contactName || '');
    // //   }