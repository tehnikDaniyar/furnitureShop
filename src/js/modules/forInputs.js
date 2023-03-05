export const forInputs = () => {
	let inputs = document.querySelectorAll('input');
	for (let input of inputs) {
		const valuePlaceholder = input.placeholder;

		input.addEventListener('focus', function () {
			this.placeholder = '';
		});

		input.addEventListener('blur', function getBlur() {
			this.placeholder = valuePlaceholder;
		})

		if (input.hasAttribute('data-error')) {
			let parent = input.parentElement;
			let divError = document.createElement('div');
			divError.textContent = 'error';
			divError.classList.add('subscribe__error');

			parent.addEventListener('submit', () => {
				if (!parent.querySelector('.subscribe__error')) {
					if (!/[\w\d]+@[a-z].[a-z]/gi.test(input.value)) {
						parent.appendChild(divError);
					};
				} else {
					if (/[\w\d]+@[a-z].[a-z]/gi.test(input.value)) {
						parent.removeChild(parent.querySelector(".subscribe__error"));
					};
				}
			})
		}
	}
}