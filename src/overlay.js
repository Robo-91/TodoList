export const overlay = document.getElementById('overlay');

 // Getting Overlay when Todo form is displayed
export function displayOverlayOn() {
	overlay.style.display = 'block';
}

export function displayOverlayOff() {
	overlay.style.display = 'none';
}

// Toggle form animations
export function formFadeIn(form) {
	form.classList.remove('leave');
	form.classList.add('enter');
}

export function formFadeOut(form) {
	form.classList.remove('enter');
	form.classList.add('leave');
}