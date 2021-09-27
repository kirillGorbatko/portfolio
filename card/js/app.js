var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
function isIE() {
	ua = navigator.userAgent;
	var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
	return is_ie;
}
if (isIE()) {
	document.querySelector('body').classList.add('ie');
}
if (isMobile.any()) {
	document.querySelector('body').classList.add('_touch');
}
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('_webp');
	} else {
		document.querySelector('body').classList.add('_no-webp');
	}
});
function ibg() {
	if (isIE()) {
		let ibg = document.querySelectorAll("._ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
}
ibg();

let unlock = true;

//=================
//Menu
let iconMenu = document.querySelector(".icon-menu");
if (iconMenu != null) {
	let delay = 500;
	let menuBody = document.querySelector(".menu__body");
	iconMenu.addEventListener("click", function (e) {
		if (unlock) {
			body_lock(delay);
			iconMenu.classList.toggle("_active");
			menuBody.classList.toggle("_active");
		}
	});
};
function menu_close() {
	let iconMenu = document.querySelector(".icon-menu");
	let menuBody = document.querySelector(".menu__body");
	iconMenu.classList.remove("_active");
	menuBody.classList.remove("_active");
}
//=================
//BodyLock
function body_lock(delay) {
	let body = document.querySelector("body");
	if (body.classList.contains('_lock')) {
		body_lock_remove(delay);
	} else {
		body_lock_add(delay);
	}
}
function body_lock_remove(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		setTimeout(() => {
			for (let index = 0; index < lock_padding.length; index++) {
				const el = lock_padding[index];
				el.style.paddingRight = '0px';
			}
			body.style.paddingRight = '0px';
			body.classList.remove("_lock");
		}, delay);

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
function body_lock_add(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		for (let index = 0; index < lock_padding.length; index++) {
			const el = lock_padding[index];
			el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		}
		body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		body.classList.add("_lock");

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
//=================

//=================
//Tabs
let tabs = document.querySelectorAll("._tabs");
for (let index = 0; index < tabs.length; index++) {
	let tab = tabs[index];
	let tabs_items = tab.querySelectorAll("._tabs-item");
	let tabs_blocks = tab.querySelectorAll("._tabs-block");
	for (let index = 0; index < tabs_items.length; index++) {
		let tabs_item = tabs_items[index];
		tabs_item.addEventListener("click", function (e) {
			for (let index = 0; index < tabs_items.length; index++) {
				let tabs_item = tabs_items[index];
				tabs_item.classList.remove('_active');
				tabs_blocks[index].classList.remove('_active');
			}
			tabs_item.classList.add('_active');
			tabs_blocks[index].classList.add('_active');
			e.preventDefault();
		});
	}
}
//=================
//Spollers
let spollers = document.querySelectorAll("._spoller");
let spollersGo = true;
if (spollers.length > 0) {
	for (let index = 0; index < spollers.length; index++) {
		const spoller = spollers[index];
		spoller.addEventListener("click", function (e) {
			if (spollersGo) {
				spollersGo = false;
				if (spoller.classList.contains('_spoller-992') && window.innerWidth > 992) {
					return false;
				}
				if (spoller.classList.contains('_spoller-768') && window.innerWidth > 768) {
					return false;
				}
				if (spoller.closest('._spollers').classList.contains('_one')) {
					let curent_spollers = spoller.closest('._spollers').querySelectorAll('._spoller');
					for (let i = 0; i < curent_spollers.length; i++) {
						let el = curent_spollers[i];
						if (el != spoller) {
							el.classList.remove('_active');
							_slideUp(el.nextElementSibling);
						}
					}
				}
				spoller.classList.toggle('_active');
				_slideToggle(spoller.nextElementSibling);

				setTimeout(function () {
					spollersGo = true;
				}, 500);
			}
		});
	}
}
//=================
//Gallery
let gallery = document.querySelectorAll('._gallery');
if (gallery) {
	gallery_init();
}
function gallery_init() {
	for (let index = 0; index < gallery.length; index++) {
		const el = gallery[index];
		lightGallery(el, {
			counter: false,
			selector: 'a',
			download: false
		});
	}
}
//=================
//SearchInList
function search_in_list(input) {
	let ul = input.parentNode.querySelector('ul')
	let li = ul.querySelectorAll('li');
	let filter = input.value.toUpperCase();

	for (i = 0; i < li.length; i++) {
		let el = li[i];
		let item = el;
		txtValue = item.textContent || item.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			el.style.display = "";
		} else {
			el.style.display = "none";
		}
	}
}
//=================
//SlideToggle
let _slideUp = (target, duration = 500) => {
	target.style.transitionProperty = 'height, margin, padding';
	target.style.transitionDuration = duration + 'ms';
	target.style.height = target.offsetHeight + 'px';
	target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	window.setTimeout(() => {
		target.style.display = 'none';
		target.style.removeProperty('height');
		target.style.removeProperty('padding-top');
		target.style.removeProperty('padding-bottom');
		target.style.removeProperty('margin-top');
		target.style.removeProperty('margin-bottom');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideDown = (target, duration = 500) => {
	target.style.removeProperty('display');
	let display = window.getComputedStyle(target).display;
	if (display === 'none')
		display = 'block';

	target.style.display = display;
	let height = target.offsetHeight;
	target.style.overflow = 'hidden';
	target.style.height = 0;
	target.style.paddingTop = 0;
	target.style.paddingBottom = 0;
	target.style.marginTop = 0;
	target.style.marginBottom = 0;
	target.offsetHeight;
	target.style.transitionProperty = "height, margin, padding";
	target.style.transitionDuration = duration + 'ms';
	target.style.height = height + 'px';
	target.style.removeProperty('padding-top');
	target.style.removeProperty('padding-bottom');
	target.style.removeProperty('margin-top');
	target.style.removeProperty('margin-bottom');
	window.setTimeout(() => {
		target.style.removeProperty('height');
		target.style.removeProperty('overflow');
		target.style.removeProperty('transition-duration');
		target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	}, duration);
}
let _slideToggle = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (window.getComputedStyle(target).display === 'none') {
			return _slideDown(target, duration);
		} else {
			return _slideUp(target, duration);
		}
	}
}
//========================================
//Wrap
function _wrap(el, wrapper) {
	el.parentNode.insertBefore(wrapper, el);
	wrapper.appendChild(el);
}
//========================================
//RemoveClasses
function _removeClasses(el, class_name) {
	for (var i = 0; i < el.length; i++) {
		el[i].classList.remove(class_name);
	}
}
//========================================
//IsHidden
function _is_hidden(el) {
	return (el.offsetParent === null)
}
//========================================

let wrapper = document.querySelector('.wrapper');
const time = 2000;
const step = 1;
let checkNumb = false;

let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');

			if (slider.classList.contains('_swiper_scroll')) {
				let sliderScroll = document.createElement('div');
				sliderScroll.classList.add('swiper-scrollbar');
				slider.appendChild(sliderScroll);
			}
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) { }


let portfolioSlider = new Swiper('.screen__slider_portfolio', {
		direction: 'horizontal',
		observer: true,
		observeParents: true,
		spaceBetween: 50,
		slidesPerView: 3,
		centeredSlides: true,
		loop: true,
		speed: 800,
		// Arrows
		navigation: {
			nextEl: '.screen__control_portfolio .screen__arrow_next',
			prevEl: '.screen__control_portfolio .screen__arrow_prev',
		},
		pagination: {
			el: '.screen__control_portfolio .screen__progress',
			type: 'fraction',
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 5,
				centeredSlides: false,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 30,
				centeredSlides: true,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			1268: {
				slidesPerView: 3,
				spaceBetween: 50,
			},
		},
});

let reviewsSlider = new Swiper('.screen__slider_reviews', {
		direction: 'horizontal',
		observer: true,
		observeParents: true,
		spaceBetween: 50,
		slidesPerView: 3,
		loop: true,
		parallax: true,
		centeredSlides: true,
		speed: 800,
		// Arrows
		navigation: {
			nextEl: '.screen__control_reviews .screen__arrow_next',
			prevEl: '.screen__control_reviews .screen__arrow_prev',
		},
		pagination: {
			el: '.screen__control_reviews .screen__progress',
			type: 'fraction',
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 5,
				centeredSlides: false,
			},
			768: {
				slidesPerView: 1.7,
				spaceBetween: 15,
				centeredSlides: true,
			},
			992: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
			1268: {
				slidesPerView: 2.5,
				spaceBetween: 30,
			},
			1400: {
				slidesPerView: 3,
				spaceBetween: 50,
			},
		},
});

let pageSlider = new Swiper('.page', {
		// Свои классы
		wrapperClass: "page__wrapper",
		slideClass: "page__screen",

		// Вертикальный слайдер
		direction: 'vertical',

		// Количество слайдов для показа
		slidesPerView: 'auto',

		// Включаем параллакс
		parallax: true,


		// Управление клавиатурой
		keyboard: {
			// Включить\выключить
			enabled: true,
			// Включить\выключить
			// только когда слайдер
			// в пределах вьюпорта
			onlyInViewport: true,
			// Включить\выключить
			// управление клавишами
			// pageUp, pageDown
			pageUpDown: true,
		},

		// Управление колесом мыши
		mousewheel: {
			// Чувствительность колеса мыши
			sensitivity: 1,
		},

		// Отключение функционала
		// если слайдов меньше чем нужно
		watchOverflow: true,

		// Скорость
		speed: 800,

		// Обновить свайпер
		// при изменении элементов слайдера
		observer: true,

		// Обновить свайпер
		// при изменении родительских
		// элементов слайдера
		observeParents: true,

		// Обновить свайпер
		// при изменении дочерних
		// элементов слайда
		observeSlideChildren: true,

		// Отступ в конце слайда, для коректного отображения
		slidesOffsetAfter: 0.5,

		// Навигация 
		// Буллеты, текущее положение, прогрессбар
		pagination: {
			el: '.page__pagination',
			type: 'bullets',
			clickable: true,
			bulletClass: "page__bullet",
			bulletActiveClass: "page__bullet_active",
		},
		// Скролл
		scrollbar: {
			el: '.page__scroll',
			dragClass: "page__drag-scroll",
			// Возможность перетаскивать скролл
			draggable: true
		},

		// Отключаем автоинициализацию
		init: false,

		// События
		on: {
			// Событие инициализации
			init: function () {
				menuSlider();
				setScrollType();
				wrapper.classList.add('_loaded');
			},
			// Событие смены слайда
			slideChange: function () {
				percentCounter();
				menuSliderRemove();
				setScrollReviews();
				menuLinks[pageSlider.realIndex].classList.add('_active');
				let header = document.querySelector('header.header');
				if (header != null) {
					if (pageSlider.realIndex == 0) header.classList.remove('_scroll')
						else header.classList.add('_scroll');
				};
			},
			resize: function () {
				setScrollType();
			}
		},
});
let menuLinks = document.querySelectorAll('.menu__link');
let gotoButtons = document.querySelectorAll('._goto');
let header = document.querySelector('header.header');

function menuSlider() {
	if (menuLinks.length > 0) {
		menuLinks[pageSlider.realIndex].classList.add('_active');
		for (let index = 0; index < menuLinks.length; index++) {
			const menuLink = menuLinks[index];
			menuLink.addEventListener("click", function (e) {
				menuSliderRemove();
				menu_close();
				pageSlider.slideTo(index, 800);
				menuLink.classList.add('_active');
				e.preventDefault();
			});
		}
		for (let index = 0; index < gotoButtons.length; index++){
			const gotoButton = gotoButtons[index];
			gotoButton.addEventListener("click", function (e) {
				const indexSlideTo = gotoButton.dataset.swiperSlideTo;
				pageSlider.slideTo(indexSlideTo, 800);
				e.preventDefault();
			});
		}
	}
}

function percentCounter(){
	let percents = document.querySelectorAll('.item-screen__percent');
	let circles = document.querySelectorAll('circle.item-screen__circle');
	if (percents.length > 0 && pageSlider.realIndex == 1) {
		for (let i = 0; i < percents.length; i++) {
			const percent = percents[i];
			const circle = circles[i];
			const circumference = circle.getTotalLength();

			circle.style.strokeDasharray = circumference;
			circle.style.strokeDashoffset = circumference;

			num = percent.dataset.value;
			outNum(num, percent);
			setProgress(num, circle, circumference);
		}
	}
}

function outNum(num, elem){
	if (checkNumb == false) {
		let n = 0;
		let t = Math.round(time / (num / step));
		let interval = setInterval(() => {
			n = n + step;
			if (n == num) {
				checkNumb = true;
				clearInterval(interval);
			}
			elem.innerHTML = n;
		},t);
	}
}

function setProgress(num, elem, circumference){
	if (num == 88) num = 15;
	else if (num == 15) num = 88;
	const offset = circumference - num / 100 * circumference;
	elem.style.strokeDashoffset = offset;
}

function menuSliderRemove() {
	let menuLinkActive = document.querySelector('.menu__link._active');
	if (menuLinkActive) {
		menuLinkActive.classList.remove('_active');
	}
}

function setScrollType() {
	if (wrapper.classList.contains('_free')) {
		wrapper.classList.remove('_free');
		header.classList.remove('_scroll');
		pageSlider.params.freeMode = false;
		pageSlider.params.parallax = true;
		pageSlider.params.slidesOffsetAfter = 0.5;
	}
	for (let index = 0; index < pageSlider.slides.length; index++) {
		const pageSlide = pageSlider.slides[index];
		const pageSlideContent = pageSlide.querySelector('.screen__content');
		if (pageSlideContent) {
			const pageSlideContentHeight = pageSlideContent.offsetHeight;
			if (pageSlideContentHeight > window.innerHeight) {
				wrapper.classList.add('_free');
				header.classList.add('_scroll');
				pageSlider.params.freeMode = true;
				pageSlider.params.parallax = false;
				pageSlider.params.slidesOffsetAfter = 0;
				break;
			}
		}
	}
}

function setScrollReviews(){
	if (!isMobile.any()) {
		let reviewsBlock = document.querySelector('.screen_reviews');
		reviewsBlock.addEventListener('mousemove' || 'click', function(e){
			const currentElement = e.target.parentElement;
			if (currentElement.className === "item-screen__review"){
				pageSlider.mousewheel.disable();
			}
			else pageSlider.mousewheel.enable();
		});
	}
}


pageSlider.init();


window.onload = function () {
	let copyButtons = document.querySelectorAll('._btn-copy');
	if (copyButtons.length > 0) {
		for (let i = 0; i < copyButtons.length; i++){
			let copyButton = copyButtons[i];
			let copyValue = copyButton.dataset.copy;
			copyButton.addEventListener("click", function(event){
				for (let i = 0; i < copyButtons.length; i++){
					copyButtons[i].classList.remove('_active');
					copyButtons[i].innerHTML = 'Copy';
				}
				if (navigator.clipboard){
					navigator.clipboard.writeText(copyValue)
								.then(() => {
									copyButton.classList.add('_active');
									copyButton.innerHTML = 'Copied';
								})
								.catch(err => {
									alert('Copy error :(');
								});
							}
						});
					}
				}
	if (!isMobile.any()) {
		const canvasBackground = document.querySelector('canvas.screen__canvas');
		if (canvasBackground) {
			const ctx = canvasBackground.getContext('2d');
			canvasBackground.width = window.innerWidth;
			canvasBackground.height = canvasBackground.offsetHeight;

			let particlesArray;

			// get mouse position
			let mouse = {
				x: null,
				y: null,
				radius: (canvasBackground.height/100) * (canvasBackground.width/100)
			}

			window.addEventListener('mousemove',
				function(event) {
					mouse.x = event.x;
					mouse.y = event.y;
				}
			);

			// create particle
			class Particle{
				constructor(x, y, directionX, directionY, size, color) {
					this.x = x;
					this.y = y;
					this.directionX = directionX;
					this.directionY = directionY;
					this.size = size;
					this.color = color;
				}
				// method to draw particles
				draw() {
					ctx.beginPath();
					ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
					if (this.x < (canvasBackground.width / 2)) ctx.fillStyle = "#fff";
					else ctx.fillStyle = "#000";
					ctx.fill();
				}
				// check particlke position, mouse position,move the particle, draw the particle
				update() {
					//check if particle is still within canvas
					if (this.x > canvasBackground.width || this.x < 0) {
						this.directionX = -this.directionX;
					}
					if (this.y > canvasBackground.height || this.y < 0) {
						this.directionY = -this.directionY;
					}

					//check collision detection - mouse position / particle position
					let dx = mouse.x - this.x;
					let dy = mouse.y - this.y;
					let distance = Math.sqrt(dx*dx + dy*dy);
					if (distance < mouse.radius + this.size){
						if (mouse.x < this.x && this.x < canvasBackground.width - this.size * 10) {
							this.x += 10;
						}
						if (mouse.x > this.x && this.x > this.size * 10) {
							this.x -= 10;
						}
						if (mouse.y < this.y && this.y < canvasBackground.height - this.size * 10) {
							this.y += 10;
						}
						if (mouse.y > this.y && this.y > this.size * 10) {
							this.y -= 10;
						}
					}
					//move particle
					this.x += this.directionX;
					this.y += this.directionY;
					// draw particle
					this.draw();
				}
			}

			//create particle array
			function  init() {
				particlesArray = [];
				let numberOfParticles = (canvasBackground.height * canvasBackground.width) / 9000;
				for (let i = 0; i < numberOfParticles; i++) {
					let size = (Math.random() * 5) + 1;
					let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
					let y = (Math.random() * ((canvasBackground.offsetHeight - size * 2) - (size * 2)) + size * 2);
					let directionX = (Math.random() * 5) - 2.5;
					let directionY = (Math.random() * 5) - 2.5;
					let color = '#000';

					particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
				}
			}

			//check if particles are enough to draw line between them
			function connect() {
				let opacityValue = 1;
				for (let a = 0; a < particlesArray.length; a++) {
					for (let b = a; b < particlesArray.length; b++) {
						let distance = (( particlesArray[a].x - particlesArray[b].x)
						 * (particlesArray[a].x - particlesArray[b].x))
						 + ((particlesArray[a].y - particlesArray[b].y) * 
						(particlesArray[a].y - particlesArray[b].y));
						if (distance < (canvasBackground.width/7) * (canvasBackground.height/7)) {
							opacityValue = 1 - (distance/20000);
							if (particlesArray[a].x < canvasBackground.width / 2) ctx.strokeStyle = 'rgba(255,255,255,'+ opacityValue +')';
							else ctx.strokeStyle = 'rgba(0,0,0,'+ opacityValue +')';
							ctx.lineWidth = 1;
							ctx.beginPath();
							ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
							ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
							ctx.stroke();
						}
					}
				}
			}

			//animation loop
			function animate() {
				requestAnimationFrame(animate);
				ctx.clearRect(0,0,innerWidth, canvasBackground.offsetHeight);

				for (let i = 0; i < particlesArray.length; i++) {
					particlesArray[i].update();
				}
				connect();
			}

			//resize event
			window.addEventListener('resize',
				function(){
					canvasBackground.width = innerWidth;
					canvasBackground.height = canvasBackground.offsetHeight;
					mouse.radius = ((canvasBackground.height / 100) * (canvasBackground.height / 100));
					if (mouse.radius > 63) mouse.radius = ((canvasBackground.height / 150) * (canvasBackground.height / 150));
					init();
				}
			);

			//mouse out event
			window.addEventListener('mouseout',
				function () {
					mouse.x = undefined;
					mouse.y = undefined;
				}
			);


			init();
			animate();
		}
		let contactsBlock = document.querySelector('.screen_contacts');
		let skillsBlock = document.querySelector('.screen_skills');
		const headerEye = document.querySelector('.header__logo');
		let buttons = document.querySelectorAll('.button');
		if (contactsBlock) {
			let contactsItems = contactsBlock.querySelectorAll('.item-screen');
			if (contactsItems.length > 0) {
				VanillaTilt.init(contactsItems, {
					max: 15,
					speed: 400
				});
			}
		}
		if (skillsBlock) {
			let skillsItems = skillsBlock.querySelectorAll('.item-screen');
			if (skillsItems.length > 0) {
				VanillaTilt.init(skillsItems, {
					max: 20,
					speed: 400
				});
			}
		}
		if (headerEye){
			window.addEventListener('mousemove',
				function(event) {
					let x = (headerEye.getBoundingClientRect().left) + (headerEye.clientWidth / 2);
					let y = (headerEye.getBoundingClientRect().top) + (headerEye.clientHeight / 2);
					let radian = Math.atan2(event.pageX - x, event.pageY - y);
					let rotation = (radian * (180 / Math.PI) * -1) +270;
					headerEye.style.transform = 'rotate('+ rotation + 'deg)';
				}
			);
		}
		if (buttons.length > 0) {
			for (let i = 0; i < buttons.length; i++){
				const button = buttons[i];
				const buttonSpan = button.querySelector('span');
				button.addEventListener("mousemove", function(event){
					let targatCoordinats = button.getBoundingClientRect();
					let positionX = event.clientX - targatCoordinats.left;
					let positionY = event.clientY - targatCoordinats.top;
					buttonSpan.style.left = positionX + 'px';
					buttonSpan.style.top = positionY + 'px';
				});
			}
		}
	}
};

