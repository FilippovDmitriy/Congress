const tAll = document.querySelector('div[data-tab="all"]');
const tNine = document.querySelector('div[data-tab="9"]');
const tTen = document.querySelector('div[data-tab="10"]');
const parent_original = document.querySelector('.footer__inner');
const parent = document.querySelector('.footer__date');
const item = document.querySelector('.footer__number');
const item2 = document.querySelector('.footer__sn');

let mySwiper;
let endDate = new Date("May 27, 2021 12:00:00").getTime();
var timer = setInterval(function() {
	let now = new Date().getTime();
	let t = endDate - now;

	if (t >= 0) {

		let days = Math.floor(t / (1000 * 60 * 60 * 24));
		let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
		let secs = Math.floor((t % (1000 * 60)) / 1000);

		(document.querySelector(".first-days")).textContent = days;
		(document.querySelector(".first-hours")).textContent = hours;
		(document.querySelector(".first-minutes")).textContent = mins;
		(document.querySelector(".first-seconds")).textContent = secs;

		}
}, 1000);

const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
	const headerTopNav = document.querySelector('.header__list');
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		document.querySelector('.menu__body').classList.toggle('_active');
		iconMenu.classList.toggle('_active');
		headerTopNav.classList.toggle('_active');
	});
};

if (tNine.classList.contains('active')) {
	document.querySelector('.auxiliary-slider-first[data-date="9"]').classList.add('active');
	let mySwiper = new Swiper('.auxiliary-slider-first[data-date="9"] .program-tabs', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination.nine',
		},
		observer: true,
		observeParents: true,
		observerSlideChildren: true,
		spaceBetween: 15,
		slidesPerView: 3,
		touchRatio: 0,
		breakpoints: {
			320: {
				touchRatio: 1,
				slidesPerView: 1,
			},
			768: {
				touchRatio: 0,
				slidesPerView: 2,
			},
			1366: {
				slidesPerView: 3,
			},
		},
	});
}
if (tTen.classList.contains('active')) {
	document.querySelector('.auxiliary-slider-first[data-date="10"]').classList.add('active');
	let mySwiper = new Swiper('.auxiliary-slider-first[data-date="10"] .program-tabs', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination.ten',
		},
		observer: true,
		observeParents: true,
		observerSlideChildren: true,
		spaceBetween: 15,
		slidesPerView: 3,
		touchRatio: 0,
		breakpoints: {
			320: {
				touchRatio: 1,
				slidesPerView: 1,
			},
			768: {
				touchRatio: 0,
				slidesPerView: 2,
			},
			1366: {
				slidesPerView: 3,
			},
		},
	});
}
if (tAll.classList.contains('active')) {
	document.querySelector('.auxiliary-slider-first[data-date="all"]').classList.add('active');
	let mySwiper = new Swiper('.auxiliary-slider-first[data-date="all"] .program-tabs', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination.all',
		},
		observer: true,
		observeParents: true,
		observerSlideChildren: true,
		spaceBetween: 15,
		slidesPerView: 3,
		touchRatio: 0,
		breakpoints: {
			320: {
				touchRatio: 1,
				slidesPerView: 1,
			},
			768: {
				touchRatio: 0,
				slidesPerView: 2,
			},
			1366: {
				slidesPerView: 3,
			},
		},
	});
}

tNine.addEventListener("click", function (e) {
	mySwiper = null;
	document.querySelectorAll('.program-menu__item').forEach(el => {
		el.classList.remove('active');
	});
	tNine.classList.add('active');
	document.querySelectorAll('.auxiliary-slider-first').forEach(el => {
		el.classList.remove('active');
	});
	document.querySelectorAll('.swiper-pagination-bullets').forEach(el => {
		el.classList.remove('swiper-pagination-bullets');
	});
	document.querySelectorAll('.swiper-pagination-bullet').forEach(el => {
		el.parentNode.removeChild(el);
	});
	document.querySelector('.auxiliary-slider-first[data-date="9"]').classList.add('active');
	let mySwiper = new Swiper('.auxiliary-slider-first[data-date="9"] .program-tabs', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination.nine',
		},
		observer: true,
		observeParents: true,
		observerSlideChildren: true,
		spaceBetween: 15,
		slidesPerView: 3,
		touchRatio: 0,
		breakpoints: {
			320: {
				touchRatio: 1,
				slidesPerView: 1,
			},
			768: {
				touchRatio: 0,
				slidesPerView: 2,
			},
			1366: {
				slidesPerView: 3,
			},
		},
	});
});
tTen.addEventListener("click", function (e) {
	mySwiper = null;
	document.querySelectorAll('.program-menu__item').forEach(el => {
		el.classList.remove('active');
	});
	tTen.classList.add('active');
	document.querySelectorAll('.auxiliary-slider-first').forEach(el => {
		el.classList.remove('active');
	});
	document.querySelectorAll('.swiper-pagination-bullets').forEach(el => {
		el.classList.remove('swiper-pagination-bullets');
	});
	document.querySelectorAll('.swiper-pagination-bullet').forEach(el => {
		el.parentNode.removeChild(el);
	});
	document.querySelector('.auxiliary-slider-first[data-date="10"]').classList.add('active');
	let mySwiper = new Swiper('.auxiliary-slider-first[data-date="10"] .program-tabs', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination.ten',
		},
		observer: true,
		observeParents: true,
		observerSlideChildren: true,
		spaceBetween: 15,
		slidesPerView: 3,
		touchRatio: 0,
		breakpoints: {
			320: {
				touchRatio: 1,
				slidesPerView: 1,
			},
			768: {
				touchRatio: 0,
				slidesPerView: 2,
			},
			1366: {
				slidesPerView: 3,
			},
		},
	});
});
tAll.addEventListener("click", function (e) {
	mySwiper = null;
	document.querySelectorAll('.program-menu__item').forEach(el => {
		el.classList.remove('active');
	});
	tAll.classList.add('active');
	document.querySelectorAll('.auxiliary-slider-first').forEach(el => {
		el.classList.remove('active');
	});
	document.querySelector('.auxiliary-slider-first[data-date="all"]').classList.add('active');
	let mySwiper = new Swiper('.auxiliary-slider-first[data-date="all"] .program-tabs', {
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination.all',
		},
		observer: true,
		observeParents: true,
		observerSlideChildren: true,
		spaceBetween: 15,
		slidesPerView: 3,
		touchRatio: 0,
		breakpoints: {
			320: {
				touchRatio: 1,
				slidesPerView: 1,
			},
			768: {
				touchRatio: 0,
				slidesPerView: 2,
			},
			1366: {
				slidesPerView: 3,
			},
		},
	});
});

$('.questions__q').click(function(argument) {
	$(this).toggleClass('active').next().slideToggle(250);
})

if (window.innerWidth <= 1023) {
	if (!item.classList.contains('done')) {
		parent.insertBefore(item, parent.children[0]);
		item.classList.add('done');
	}
} else {
	if (item.classList.contains('done')) {
		parent_original.insertBefore(item, parent_original.children[3]);
		item.classList.remove('done');
	}
}
if (window.innerWidth <= 767) {
	[...document.getElementsByClassName('news__row')].forEach(i => i.classList.add("swiper-container"));
	document.getElementsByClassName('news__row')[0].childNodes[1].classList.add("swiper-wrapper");
	document.getElementsByClassName('news__row')[1].childNodes[1].classList.add("swiper-wrapper");
	[...document.querySelectorAll('.col-1 .news__item')].forEach(i => i.parentNode.before(i));
	[...document.getElementsByClassName('news__item')].forEach(i => i.classList.add("swiper-slide"));
	[...document.getElementsByClassName('news__item')].forEach(i => i.classList.add("swiper-slide"));
	document.getElementsByClassName('aux-bullet')[0].classList.add("swiper-paginationtw");
	document.getElementsByClassName('aux-bullet')[1].classList.add("swiper-paginationth");
	new Swiper('.swiper-2', {
		slidesPerView: 1,
		autoHeight: true,
		pagination: {
			el: '.swiper-paginationtw',
		},
	});
	new Swiper('.swiper-3', {
		slidesPerView: 1,
		autoHeight: true,
		pagination: {
			el: '.swiper-paginationth',
		},
	});
	if (!item2.classList.contains('done')) {
		parent.append(item2);
		item2.classList.add('done');
		document.querySelector('.footer__aux').append(document.querySelector('.footer__info'));
	}
} else {
	if (item2.classList.contains('done')) {
		parent_original.insertBefore(item2, parent_original.children[2]);
		item2.classList.remove('done');
		parent_original.append(document.querySelector('.footer__info'));
	}
}
window.addEventListener('resize', function (event) {
	if (window.innerWidth <= 1023) {
		if (!item.classList.contains('done')) {
			parent.insertBefore(item, parent.children[0]);
			item.classList.add('done');
		}
	} else {
		if (item.classList.contains('done')) {
			parent_original.insertBefore(item, parent_original.children[3]);
			item.classList.remove('done');
		}
	}
	if (window.innerWidth <= 767) {
		if (!item2.classList.contains('done')) {
			parent.append(item2);
			item2.classList.add('done');
			document.querySelector('.footer__aux').append(document.querySelector('.footer__info'));
		}
	} else {
		if (item2.classList.contains('done')) {
			parent_original.insertBefore(item2, parent_original.children[2]);
			item2.classList.remove('done');
			parent_original.append(document.querySelector('.footer__info'));
		}
	}
});
