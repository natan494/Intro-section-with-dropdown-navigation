const features = document.querySelector(`#nav-bar__features`);
const navBarFeturesDropDown = document.querySelector(
	`.nav-bar__features__drop__down__links`
);
const company = document.querySelector(`#nav-bar__company`);
const navBarCompanyDropDown = document.querySelector(
	`.nav-bar__company__drop__down__links`
);
const togglerClose = document.querySelector(`#toggler__close`);
const toggler = document.querySelector(`.toggler`);
const navBar = document.querySelector(`.nav-bar__links__container`);
const navmenu = document.querySelector(`.toggler__menu`);
const loginReg = document.querySelector(`.nav-bar__login__container`);
const featuresBtnHanddler = (e) => {
	e.preventDefault();
	navBarFeturesDropDown.classList.toggle(`d-none`);
};
const windowWidth = window.innerWidth;

const companyHanddler = (e) => {
	e.preventDefault();
	navBarCompanyDropDown.classList.toggle(`d-none`);
};

const togglerHanddler = () => {
	navBar.classList.remove(`d-none`);
	navmenu.classList.remove(`d-none`);
	navBar.classList.add(`flex_cullum`);
	navmenu.classList.add(`flex_cullum`);
	loginReg.classList.remove(`d-none`);
	navmenu.append(navBar);
	navmenu.append(loginReg);
};

const togglerCloseHanddler = () => {
	navBar.classList.toggle(`d-none`);
	navmenu.classList.toggle(`d-none`);
	navBar.classList.remove(`flex_cullum`);
};

features.addEventListener(`click`, featuresBtnHanddler);
company.addEventListener(`click`, companyHanddler);

toggler.addEventListener(`click`, togglerHanddler);
togglerClose.addEventListener(`click`, togglerCloseHanddler);
navmenu.addEventListener(`click`, (e) => {
	e.stopPropagation();
});

if (window.innerWidth > 863) {
}
