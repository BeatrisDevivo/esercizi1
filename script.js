document.addEventListener("DOMContentLoaded", function () {
	
	const burgerMenu = document.getElementById("burger-menu");
	const menuMobile = document.getElementById("menu-mobile");

	if (burgerMenu && menuMobile) {
	  burgerMenu.addEventListener("click", function (event) {
		event.stopPropagation();
		menuMobile.classList.toggle("show");
	  });

	  document.addEventListener("click", function (event) {
		if (!menuMobile.contains(event.target) && !burgerMenu.contains(event.target)) {
		  menuMobile.classList.remove("show");
		}
	  });
	}

	
	const carrelloBtn = document.getElementById("carrelloBtn");
	const carrelloSide = document.getElementById("carrello");

	if (carrelloBtn && carrelloSide) {
		carrelloBtn.addEventListener("click", function (event) {
			event.stopPropagation();
			carrelloSide.classList.toggle("show");
		});

		// Chiudi il carrello cliccando fuori
		document.addEventListener("click", function (event) {
			if (!carrelloSide.contains(event.target) && !carrelloBtn.contains(event.target)) {
				carrelloSide.classList.remove("show");
			}
		});
	}


	const cookiePopup = document.getElementById("cookie-popup");
	const acceptCookies = document.getElementById("accept-cookies");
	const declineCookies = document.getElementById("decline-cookies");

	if (cookiePopup && acceptCookies && declineCookies) {
	  if (!localStorage.getItem("cookiesAccepted")) {
		cookiePopup.classList.remove("hidden");
	  }

	  acceptCookies.addEventListener("click", function () {
		localStorage.setItem("cookiesAccepted", "true");
		cookiePopup.classList.add("hidden");
	  });

	  declineCookies.addEventListener("click", function () {
		localStorage.setItem("cookiesAccepted", "false");
		cookiePopup.classList.add("hidden");
	  });
	}
});
