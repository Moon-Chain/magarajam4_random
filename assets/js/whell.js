const spinButton = document.getElementById('spin');
const dial = document.querySelector('.dial');

spinButton.addEventListener('click', () => {
	dial.classList.toggle("spinning");
	document.querySelector('content-container').classList.toggle('activated');
});