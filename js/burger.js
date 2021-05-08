const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
	const headerTopNav = document.querySelector('.header__list');
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		document.querySelector('.menu__body').classList.toggle('_active');
		iconMenu.classList.toggle('_active');
		headerTopNav.classList.toggle('_active');
	});
}