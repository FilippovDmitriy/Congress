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

$('.chat__button').click(function(argument) {
	$(this).toggleClass('active').next().slideToggle(250);
	$('.chat__message').slideToggle(250);
})

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
		1365: {
			slidesPerView: 4.7,
			touchRatio: 0,
		}
	}
});
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
		1365: {
			slidesPerView: 4.7,
			touchRatio: 0,
		}
	}
});
if (window.innerWidth <= 1365) {
	infoAux.append(document.querySelector('.chat'));
	document.querySelector('.video__aux').append(document.querySelector('.info-top__link'));
	document.querySelector('.video__aux').append(document.querySelector('.info-top__share'));
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