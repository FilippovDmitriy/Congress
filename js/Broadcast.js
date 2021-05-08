const parent = document.querySelector('.footer__date');
const item2 = document.querySelector('.footer__sn');
const parent_original = document.querySelector('.footer__inner');
const item = document.querySelector('.footer__number');
const infoAux = document.querySelector('.info-top__aux');
const infoLink = document.querySelector('.info-top__link');
const infoShare = document.querySelector('.info-top__share');
const infoTMain = document.querySelector('.info-top__main');
const infoTop = document.querySelector('.info-top');

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

new Swiper('.speakers__list', {
	navigation: {
		nextEl: '.swiper-button-next.first',
		prevEl: '.swiper-button-prev.first',
	},
	pagination: {
		el: '.swiper-pagination.first',
	},
	observer: true,
	observerParents: true,
	observerSlideChildren: true,
	spaceBetween: 5,
	breakpoints: {
		320: {
			slidesPerView: 1,
			touchRatio: 1,
		},
		370: {
			slidesPerView: 1.7,
			touchRatio: 1,
		},
		385: {
			slidesPerView: 2,
			touchRatio: 1,
		},
		767: {
			slidesPerView: 3.6,
			touchRatio: 0,
		},
		860: {
			slidesPerView: 4,
			touchRatio: 0,
		},
		1365: {
			slidesPerView: 7,
			touchRatio: 0,
		}
	}
});

$('.info__link').click(function(argument) {
	$(this).toggleClass('active').next().slideToggle(250);
})

let endDate = new Date(parseInt(new Date().getFullYear()), (parseInt(new Date().getMonth()) + 1), parseInt(new Date().getDate()), 14, 17, 0).getTime();
var timer = setInterval(function() {
	let now = new Date().getTime();
	let t = endDate - now;

	if (t >= 0) {

		let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
		let secs = Math.floor((t % (1000 * 60)) / 1000);
		
		if ((hours == 0) && (mins == 0) && (secs == 0)) {
			window.location.href='BroadcastRun.html';
		}

		document.querySelector(".time__hours span").textContent = hours;
		document.querySelector(".time__minutes span").textContent = mins;
		document.querySelector(".time__seconds span").textContent = secs;

		}
}, 1000);
if (window.innerWidth <= 1365) {
	new Swiper('.chairmen__list', {
		navigation: {
			nextEl: '.swiper-button-next.two',
			prevEl: '.swiper-button-prev.two'
		},
		pagination: {
			el: '.swiper-pagination.two',
		},
		observer: true,
		observerParents: true,
		observerSlideChildren: true,
		spaceBetween: 5,
		breakpoints: {
			320: {
				slidesPerView: 1,
				touchRatio: 1,
			},
			370: {
				slidesPerView: 1.7,
				touchRatio: 1,
			},
			385: {
				slidesPerView: 2,
				touchRatio: 1,
			},
			767: {
				slidesPerView: 3.6,
				touchRatio: 0,
			},
			860: {
				slidesPerView: 4,
				touchRatio: 0,
			},
		}
	});
} else {
	document.querySelector('.chairmen__list').classList.remove('swiper-container');
	document.querySelector('.chairmen__list').parentNode.classList.remove('swiper-container');
	document.querySelector('.chairmen__list').children[0].classList.remove('swiper-wrapper');

	document.querySelectorAll('.two').forEach(function(el) {
		el.classList.remove('swiper-button-prev');
		el.classList.remove('swiper-button-next');
	});

	document.querySelectorAll('.chairmen__item').forEach(function(el) {
		el.classList.remove('swiper-slide');
	});
}
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
	if (!infoLink.classList.contains('done')) {
		infoAux.append(infoLink);
		infoLink.classList.add('done');
	}
	if (!infoShare.classList.contains('done')) {
		infoAux.append(infoShare);
		infoShare.classList.add('done');
	}
	if (!infoShare.classList.contains('done')) {
		infoAux.append(infoShare);
		infoShare.classList.add('done');
	}
} else {
	if (item2.classList.contains('done')) {
		parent_original.insertBefore(item2, parent_original.children[2]);
		item2.classList.remove('done');
		parent_original.append(document.querySelector('.footer__info'));
	}
	if (infoLink.classList.contains('done')) {
		infoTMain.insertBefore(infoLink, parent_original.children[0]);
		infoLink.classList.remove('done');
	}
	if (infoShare.classList.contains('done')) {
		infoTop.append(infoShare);
		infoShare.classList.remove('done');
	}
}

if (window.innerWidth <= 500) {
	if (!infoAux.classList.contains('done')) {
		document.querySelector('.time .container').prepend(infoAux);
		infoAux.classList.add('done');
	}
} else {
	if (infoAux.classList.contains('done')) {
		infoTop.prepend(infoAux);
		infoAux.classList.remove('done');
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