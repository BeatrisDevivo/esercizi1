

/* BURGER MENU'*/

document.addEventListener('DOMContentLoaded', function () {
  const burgerMenu = document.querySelector('.burger-menu');
  const navigazioneSide = document.querySelector('.navigazione-side');
  const body = document.querySelector('body');

  // Funzione per aprire e chiudere il menu laterale
  function toggleMenu() {
    navigazioneSide.classList.toggle('show');
    body.classList.toggle('no-scroll'); // Disabilita lo scroll quando il menu è aperto
  }

  // Aggiungi un event listener per il click sul burger menu
  burgerMenu.addEventListener('click', toggleMenu);

  // Aggiungi un event listener per il click fuori dal menu laterale
  document.addEventListener('click', function(event) {
    if (!navigazioneSide.contains(event.target) && !burgerMenu.contains(event.target)) {
      navigazioneSide.classList.remove('show');
      body.classList.remove('no-scroll');
    }
  });
});




 /* COOKIE*/
document.addEventListener("DOMContentLoaded", function () {
    const cookiePopup = document.getElementById("cookie-popup");
    const acceptButton = document.getElementById("accept-cookies");
    const declineButton = document.getElementById("decline-cookies");
  
    // Mostra il pop-up al caricamento della pagina
    cookiePopup.style.display = "block";
  
    // Aggiungi l'evento per il bottone "Accetta"
    acceptButton.addEventListener("click", function () {
      cookiePopup.style.display = "none"; // Nascondi il pop-up
      // localStorage.setItem("cookiesAccepted", "true"); // Rimuovi o commenta questa linea
    });
  
    // Aggiungi l'evento per il bottone "Rifiuta"
    declineButton.addEventListener("click", function () {
      cookiePopup.style.display = "none"; // Nascondi il pop-up
      // localStorage.setItem("cookiesAccepted", "false"); // Rimuovi o commenta questa linea
    });
  
    // Rimuovi o commenta questa parte per mostrare il pop-up ogni volta
    // const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    // if (cookiesAccepted) {
    //   cookiePopup.style.display = "none";
    // }
  });


  document.addEventListener('DOMContentLoaded', function () {
    const carrelloBtn = document.querySelector('#carrelloBtn');
    const carrelloSide = document.querySelector('.carrello-side');
    const body = document.querySelector('body');
  
    // Funzione per aprire e chiudere la finestra laterale del carrello
    function toggleCarrello() {
      carrelloSide.classList.toggle('show');
      body.classList.toggle('no-scroll'); // Disabilita lo scroll quando il carrello è aperto
    }
  
    // Aggiungi un event listener per il click sull'icona del carrello
    carrelloBtn.addEventListener('click', toggleCarrello);
  
    // Aggiungi un event listener per il click fuori dalla finestra del carrello
    document.addEventListener('click', function(event) {
      if (!carrelloSide.contains(event.target) && !carrelloBtn.contains(event.target)) {
        carrelloSide.classList.remove('show');
        body.classList.remove('no-scroll');
      }
    });
  });
  
  