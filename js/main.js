let otherLinks = document.querySelector('.other-links');

document.onmouseover = e => {
	console.log(e.target);
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
let lastScroll = 0;

window.addEventListener('scroll', () => {
	const currentScroll = window.pageYOffset;
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

const second = 1000,
	minute = second * 60,
	hour = minute * 60,
	day = hour * 24;

// console.log('Second: ' + second);
// console.log('Minute: ' + minute);
// console.log('Hour: ' + hour);
// console.log('Day: ' + day);
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
