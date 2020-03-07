var progress = 30;
var progressElem = null;
var body = null;

document.addEventListener("DOMContentLoaded", function (event) {
	window.scrollTo(0, 0);
	body = document.querySelector("body");
	progressElem = document.querySelector("header .logo span");
	AddClass(body, 'loading', true);
	Loading();
});

function Loading(val) {
	'use strict';

	progress = val || progress;

	if (progress < 100) {
		setTimeout(function () {
			progressElem.style.width = progress + "%";
			if (!val) {
				progress += (100 - progress) / 5;
				Loading();
			}
		}, 1000)
	} else {
		setTimeout(function () {
			AddClass(body, 'preload', false);
		}, 2000);
		setTimeout(function () {
			AddClass(body, 'loading', false);
		}, 3000);
	}
}

function ShowMenu() {
	'use strict';

	var header = document.querySelector("header");

	if (hasClass(header, 'active')) {
		AddClass(header, 'active', false);
	} else {
		AddClass(header, 'active', true);
	}
}

function HideMenu(e) {
	'use strict';

	var header = document.querySelector("header");

	AddClass(header, 'active', false);
}

function Content() {
	'use strict';

	var w = window.innerWidth;
	var scrolled = window.pageYOffset || document.documentElement.scrollTop;
	var windowHeight = window.innerHeight;

	if (document.querySelector(".home")) {
		var screen1 = document.querySelector(".screen-1");
		var screen1Height = screen1.offsetHeight;
		var screen2 = document.querySelector(".screen-2");
		var screen2Height = screen2.offsetHeight;
		var screen2Img = document.querySelectorAll(".screen-2 img");
		var screen2Text = document.querySelectorAll(".screen-2 .text");

		if (w > 800) {
			var header = document.querySelector("header");
			//var screen3 = document.querySelector(".screen-3");
			var headerHeight = header.offsetHeight;
			var headerContacts = header.querySelector(".contacts");
			var screen1Img = document.querySelector(".screen-1 .img");
			//var screen3Height = screen3.offsetHeight;

			screen1Img.style.transform = "translate3d(0px, " + (-windowHeight * scrolled) / (1.5 * windowHeight) + "px, 0px)";
			screen2Img[0].style.transform = "translate3d(0px, " + (-windowHeight * scrolled) / (10 * windowHeight) + "px, 0px)";
			screen2Img[1].style.transform = "translate3d(0px, " + (windowHeight * scrolled) / (4 * windowHeight) + "px, 0px)";
			screen2Img[2].style.transform = "translate3d(0px, " + (-windowHeight * scrolled) / (12 * windowHeight) + "px, 0px)";
			screen2Img[3].style.transform = "translate3d(0px, " + (-windowHeight * scrolled) / (8 * windowHeight) + "px, 0px)";
			screen2Img[4].style.transform = "translate3d(0px, " + (windowHeight * scrolled) / (15 * windowHeight) + "px, 0px)";
			screen2Img[5].style.transform = "translate3d(0px, " + (-windowHeight * scrolled) / (5 * windowHeight) + "px, 0px)";

			if (scrolled >= windowHeight * 1.15 && scrolled < (screen2Height - windowHeight) + windowHeight) {
				AddClass(screen2Text[0], 'active', true);
				AddClass(screen2Text[1], 'active', false);
				AddClass(screen2Text[2], 'active', false);
				AddClass(screen2Text[2], 'stop', false);
				AddClass(screen2, 'stop', false);
				screen1.style.marginBottom = '';
				if (scrolled >= windowHeight + screen2Height / 3) {
					AddClass(screen2Text[0], 'active', false);
					AddClass(screen2Text[1], 'active', true);
					AddClass(screen2Text[2], 'active', false);
				}
				if (scrolled >= windowHeight + (screen2Height / 3) * 2) {
					AddClass(screen2Text[0], 'active', false);
					AddClass(screen2Text[1], 'active', false);
					AddClass(screen2Text[2], 'active', true);
				}
			} else if (scrolled >= (screen2Height - windowHeight) + windowHeight) {
				AddClass(screen2Text[2], 'stop', true);
				AddClass(screen2, 'stop', true);
				screen1.style.marginBottom = screen2Height + 'px';
			} else {
				AddClass(screen2Text[0], 'active', false);
			}

			if (scrolled >= screen2Height && scrolled < windowHeight + screen2Height + headerHeight) {
				AddClass(headerContacts, 'hide', true);
			} else {
				AddClass(headerContacts, 'hide', false);
			}
			/* if (scrolled >= windowHeight + screen2Height && scrolled < windowHeight + screen2Height + screen3Height - headerHeight) {
				AddClass(header, 'white', true);
			} else {
				AddClass(header, 'white', false);
			} */
		} else {
			if (scrolled >= screen1Height * 1.15 && scrolled < (screen2Height - windowHeight) + screen1Height) {
				AddClass(screen2Text[0], 'active', true);
				AddClass(screen2Text[1], 'active', false);
				AddClass(screen2Text[2], 'active', false);
				AddClass(screen2Text[2], 'stop', false);
				if (scrolled >= screen1Height + screen2Height / 3) {
					AddClass(screen2Text[0], 'active', false);
					AddClass(screen2Text[1], 'active', true);
					AddClass(screen2Text[2], 'active', false);
				}
				if (scrolled >= screen1Height + (screen2Height / 3) * 2) {
					AddClass(screen2Text[0], 'active', false);
					AddClass(screen2Text[1], 'active', false);
					AddClass(screen2Text[2], 'active', true);
				}
			} else if (scrolled >= (screen2Height - windowHeight) + screen1Height) {
				AddClass(screen2Text[2], 'stop', true);
			} else {
				AddClass(screen2Text[0], 'active', false);
			}
		}
	}
}


window.onload = function () {
	'use strict';

	Loading(100);

	Content();

	window.sr = ScrollReveal();

	var menu = document.querySelector(".menu");
	menu.addEventListener("click", ShowMenu);

	var showHeader = {
		origin: 'top',
		distance: '0px',
		scale: 0,
		opacity: 0,
		delay: 0,
		easing: 'ease-in-out',
		duration: 0,
		viewFactor: 1,
		afterReveal: function (el) {
			setTimeout(function () {
				sr.reveal('.home .screen-1 > *', showUp, 500);
			}, 2300);
			setTimeout(function () {
				AddClass(el, 'loaded', true);
			}, 3500);
		}
	};
	var showUp = {
		origin: 'top',
		distance: '-60px',
		scale: 0,
		opacity: 0,
		delay: 0,
		easing: 'ease-in-out',
		duration: 1000,
		viewFactor: 0.4,
		afterReveal: function (el) {
			el.style.transition = "";
		}
	};
	var showDown = {
		origin: 'top',
		distance: '60px',
		scale: 0,
		opacity: 0,
		delay: 0,
		easing: 'ease-in-out',
		duration: 1000,
		viewFactor: 0.1,
		afterReveal: function (el) {
			el.style.transition = "";
		}
	};
	var showLeft = {
		origin: 'left',
		distance: '60px',
		scale: 0,
		opacity: 0,
		delay: 0,
		easing: 'ease-in-out',
		duration: 1000,
		viewFactor: 0.4,
		afterReveal: function (el) {
			el.style.transition = "";
		}
	};
	var showRight = {
		origin: 'left',
		distance: '-60px',
		scale: 0,
		opacity: 0,
		delay: 0,
		easing: 'ease-in-out',
		duration: 1000,
		viewFactor: 0.4,
		afterReveal: function (el) {
			el.style.transition = "";
		}
	};
	var showUpDelay = {
		origin: 'top',
		distance: '-60px',
		scale: 0,
		opacity: 0,
		delay: 500,
		easing: 'ease-in-out',
		duration: 1000,
		viewFactor: 0.6
	};
	var showSubpage = {
		origin: 'top',
		distance: '-60px',
		scale: 0,
		opacity: 0,
		delay: 2300,
		easing: 'ease-in-out',
		duration: 1000,
		viewFactor: 0.1,
		beforeReveal: function (el) {
			setTimeout(function () {
				sr.reveal('.services .screen-1 .text > *', showUp, 200);
				sr.reveal('.contacts .screen-1 .text > *', showUp, 200);
			}, 2800);
		}
	};
	var showAbout = {
		origin: 'top',
		distance: '60px',
		scale: 0,
		opacity: 0,
		delay: 2300,
		easing: 'ease-in-out',
		duration: 1000,
		viewFactor: 0.1,
		beforeReveal: function (el) {
			setTimeout(function () {
				sr.reveal('.about .screen-1 > span', showDown);
			}, 2800);
		}
	};

	sr.reveal('header', showHeader);
	sr.reveal('.home .screen-3 .img', showUp);
	sr.reveal('.home .screen-3 article div > *', showUpDelay, 200);
	sr.reveal('.home .screen-4 article > *, .home .screen-4 .img a', showUpDelay, 200);
	sr.reveal('.about .screen-1 strong', showAbout);
	sr.reveal('.about .screen-2 .img', showRight);
	sr.reveal('.about .screen-2 strong span', showLeft, 400);
	sr.reveal('.about .screen-3 .swiper-container', showLeft);
	sr.reveal('.about .screen-3 strong', showRight, 400);
	sr.reveal('.about .screen-4 > *', showUp);
	sr.reveal('.services .screen-1 .img', showSubpage);
	sr.reveal('.contacts .screen-1 .map', showSubpage);

	if (document.getElementById("map")) {
		initializeMap();
	}

	var AboutGallery = new Swiper('.swiper-container', {
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
	})
};

window.onresize = function () {
	'use strict';

	Content();
};

window.onscroll = function () {
	'use strict';

	Content();
};