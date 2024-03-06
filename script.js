const navBtns = document.querySelectorAll('.nav-btn');
const ulList = document.querySelector('.nav-ul');
const navItems = document.querySelectorAll('.nav-ul li');

navBtns.forEach((btn) => {
	btn.addEventListener('click', () => {
		handleNavItemAnimation();
		navBtns[0].classList.toggle('hide');
		navBtns[1].classList.toggle('show');
		ulList.classList.toggle('active');
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
