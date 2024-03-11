const navBtns = document.querySelectorAll('.nav-btn');
const ulList = document.querySelector('.nav-ul');
const navItems = document.querySelectorAll('.nav-ul li');
const body = document.querySelector('body');
const images = document.querySelectorAll('.flex-element');

navBtns.forEach((btn) => {
	btn.addEventListener('click', () => {
		handleNavItemAnimation();
		navBtns[0].classList.toggle('hide');
		navBtns[1].classList.toggle('show');
		ulList.classList.toggle('active');
		body.classList.toggle('freeze-nav');
	});
});

const handleNavItemAnimation = () => {
	let delay = 0;

	navItems.forEach((item) => {
		item.classList.toggle('nav-items-animation');
		item.style.animationDelay = '.' + delay + 's';
		delay++;
	});
};

images.forEach((img) => {
	img.addEventListener('mouseover', () => {
		for (const image of images) {
			if (img !== image) {
				image.classList.add('gray-filter');
			}
		}
	});

	img.addEventListener('mouseleave', () => {
		for (const image of images) {
			image.classList.remove('gray-filter');
		}
	});
});
