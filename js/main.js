let otherLinks = document.querySelector('.other-links');
let skillsSection = document.querySelector('.skills');
let skills = document.querySelectorAll('.skills .progress');

document.onmouseover = e => {
	if (otherLinks.contains(e.target)) {
		!otherLinks.classList.contains('show') && otherLinks.classList.add('show');
	} else {
		otherLinks.classList.contains('show') &&
			otherLinks.classList.remove('show');
	}
};
document.onclick = e => {
	if (!otherLinks.contains(e.target) && otherLinks.classList.contains('show')) {
		otherLinks.classList.remove('show');
	}
};
const scrollUp = 'scroll-up';
const scrollDown = 'scroll-down';
let currentScroll = window.pageYOffset;
let lastScroll = 0;

const second = 1000,
	minute = second * 60,
	hour = minute * 60,
	day = hour * 24;
let days = document.getElementById('days');
let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');
let eventDate = new Date().setDate(new Date().getDate() + 15);
let countDown = new Date(eventDate).getTime();
const counterInterval = setInterval(() => {
	let now = new Date().getTime();
	let distance = countDown - now;

	days.innerText = Math.floor(distance / day);
	hours.innerText = Math.floor((distance % day) / hour);
	minutes.innerText = Math.floor((distance % hour) / minute);
	seconds.innerText = Math.floor((distance % minute) / second);

	//do something later when date is reached
	if (distance < 0) {
		clearInterval(counterInterval);
	}
}, 0);

// Increase Stats on scroll
let statsSection = document.querySelector('.stats');
let countStarted = false;
let stats = document.querySelectorAll('.stats .box .number');
function count(element) {
	let goal = +element.dataset.goal;
	let countInterval = setInterval(() => {
		element.textContent++;
		if (+element.textContent == goal) {
			clearInterval(countInterval);
		}
	}, 10);
}

window.addEventListener('scroll', () => {
	currentScroll = window.pageYOffset;
	if (currentScroll >= skillsSection.offsetTop - 280) {
		skills.forEach(skill => {
			skillStyle = getComputedStyle(skill);
			progressWidth = skillStyle.getPropertyValue('--skill-progress');
			skill.children[0].style.width = progressWidth + '%';
		});
	}
	if (currentScroll >= statsSection.offsetTop - 280) {
		if (!countStarted) {
			stats.forEach(ele => count(ele));
			countStarted = true;
		}
	}
	if (currentScroll <= 0) {
		document.body.classList.remove(scrollUp);
		return;
	}

	if (
		currentScroll > lastScroll &&
		!document.body.classList.contains(scrollDown)
	) {
		// down
		document.body.classList.remove(scrollUp);
		document.body.classList.add(scrollDown);
	} else if (
		currentScroll < lastScroll &&
		document.body.classList.contains(scrollDown)
	) {
		// up
		document.body.classList.remove(scrollDown);
		document.body.classList.add(scrollUp);
	}
	lastScroll = currentScroll;
});
