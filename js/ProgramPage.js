const tSpoiler =  document.querySelector('.top-search__spoiler');
const parent = document.querySelector('.footer__date');
const item2 = document.querySelector('.footer__sn');
const parent_original = document.querySelector('.footer__inner');
const item = document.querySelector('.footer__number');
const chairmens = document.querySelectorAll('.programs-item__chairmens .programs-item__images');
const speakers = document.querySelectorAll('.programs-item__speakers .programs-item__images');
const tAll = document.querySelector('input[data-tab="all"]');
const tNine = document.querySelector('input[data-tab="9"]');
const tTen = document.querySelector('input[data-tab="10"]');

const s1 = document.querySelector('div[data-tab="s1"]');
const s2 = document.querySelector('div[data-tab="s2"]');
const s3 = document.querySelector('div[data-tab="s3"]');
const s4 = document.querySelector('div[data-tab="s4"]');

const close = document.querySelector('.filters-large__close');
const closeMin = document.querySelector('.filters-small__close');

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

$(".filters-small input").each(function(index) {
	$(this).attr('size', $(this).val().length);
});

if (tNine.classList.contains('active')) {
	document.querySelectorAll('.ffi').forEach(el => {
		el.classList.remove('active');
	});
	document.querySelectorAll('input[data-tab="9"]').forEach(el => {
		el.classList.add('active');
	});
}
if (tTen.classList.contains('active')) {
	document.querySelectorAll('.ffi').forEach(el => {
		el.classList.remove('active');
	});
	document.querySelectorAll('input[data-tab="10"]').forEach(el => {
		el.classList.add('active');
	});
}
if (tAll.classList.contains('active')) {
	document.querySelectorAll('.ffi').forEach(el => {
		el.classList.add('active');
	});
}

tNine.addEventListener("click", function (e) {
	document.querySelectorAll('.ffi').forEach(el => {
		el.classList.remove('active');
	});
	tNine.classList.add('active');
	let formData = new FormData();
	document.querySelectorAll('.ffi').forEach(el => {
		if (el.classList.contains('active')) {
			formData.append('days', el.value);
		}
	});
	fetch('', {
		method: 'POST',
		body: formData
	});
});
tTen.addEventListener("click", function (e) {
	document.querySelectorAll('.ffi').forEach(el => {
		el.classList.remove('active');
	});
	tTen.classList.add('active');
	let formData = new FormData();
	document.querySelectorAll('.ffi').forEach(el => {
		if (el.classList.contains('active')) {
			formData.append('days', el.value);
		}
	});
	fetch('', {
		method: 'POST',
		body: formData
	});
});
tAll.addEventListener("click", function (e) {
	document.querySelectorAll('.ffi').forEach(el => {
		el.classList.remove('active');
	});
	tAll.classList.add('active');
	let formData = new FormData();
	document.querySelectorAll('.ffi').forEach(el => {
		if (el.classList.contains('active')) {
			formData.append('days', el.value);
		}
	});
	fetch('', {
		method: 'POST',
		body: formData
	});
});


$('.fse').click(function() {
	$(this).toggleClass('active');
	let formData = new FormData();
	document.querySelectorAll('.fse').forEach(el => {
		if (el.classList.contains('active')) {
			formData.append('halls', el.value);
		}
	});
	fetch('', {
		method: 'POST',
		body: formData
	});
});

$('.filters-small__item').click(function() {
	$(this).toggleClass('active');
	let formData = new FormData();
	document.querySelectorAll('.filters-small__item').forEach(el => {
		if (el.classList.contains('active')) {
			formData.append('tags', el.value);
		}
	});
	fetch('', {
		method: 'POST',
		body: formData
	});
});

close.addEventListener("click", function (e) {
	for (let i = document.querySelectorAll('.filters-large__item').length - 1; i >= 0; i--) {
		document.querySelectorAll('.filters-large__item')[i].classList.remove('active');
	}
});

closeMin.addEventListener("click", function (e) {
	for (let i = document.querySelectorAll('.filters-small__item').length - 1; i >= 0; i--) {
		document.querySelectorAll('.filters-small__item')[i].classList.remove('active');
	}
});



if (window.innerWidth <= 1023) {
	tSpoiler.textContent = 'Фильтры';
	tSpoiler.classList.add('active');
	$('.top-search__spoiler.active').click(function(argument) {
		$(this).toggleClass('done');
		$('.filters').slideToggle(250);
	});
	if (!item.classList.contains('done')) {
		parent.insertBefore(item, parent.children[0]);
		item.classList.add('done');
	}
	for (let j = chairmens.length - 1; j >= 0; j--) {
		for (let i = chairmens[j].children.length - 1; i >= 0; i--) {
			if ((i != 0) && (i != 1)) {
				chairmens[j].children[i].classList.add('deactive');
				document.querySelectorAll('.programs-item__chairmens .programs-item__images span')[j].classList.add('active');
			}
		}
		document.querySelectorAll('.programs-item__chairmens .programs-item__images span')[j].textContent = document.querySelectorAll('.programs-item__chairmens .programs-item__images span')[j].textContent + (chairmens[j].children.length - 2 - 1);
	}
	for (let j = speakers.length - 1; j >= 0; j--) {
		for (let i = speakers[j].children.length - 1; i >= 0; i--) {
			if ((i != 0) && (i != 1)) {
				speakers[j].children[i].classList.add('deactive');
				document.querySelectorAll('.programs-item__speakers .programs-item__images span')[j].classList.add('active');
			}
		}
		document.querySelectorAll('.programs-item__speakers .programs-item__images span')[j].textContent = document.querySelectorAll('.programs-item__speakers .programs-item__images span')[j].textContent + (speakers[j].children.length - 2 - 1);
	}
} else {
	tSpoiler.textContent = '';
	tSpoiler.classList.remove('active');
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
	for (let j = speakers.length - 1; j >= 0; j--) {
		for (let i = speakers[j].children.length - 1; i >= 0; i--) {
			if ((i != 0)) {
				speakers[j].children[i].classList.add('deactive');
				document.querySelectorAll('.programs-item__speakers .programs-item__images span')[j].classList.add('active');
			}
		}
		document.querySelectorAll('.programs-item__speakers .programs-item__images span')[j].textContent = ' + ещё ' + (speakers[j].children.length - 1 - 1);
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
		tSpoiler.textContent = 'Фильтры';
		tSpoiler.classList.add('active');
		if (!item.classList.contains('done')) {
			parent.insertBefore(item, parent.children[0]);
			item.classList.add('done');
		}
	} else {
		tSpoiler.textContent = '';
		tSpoiler.classList.remove('active');
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