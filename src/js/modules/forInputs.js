export const forInputs = () => {
	let inputs = document.querySelectorAll('input');
	for (let input of inputs) {
		const valuePlaceholder = input.placeholder;

		input.addEventListener('focus', () => {
			input.placeholder = '';
		});

		input.addEventListener('blur', () => {
			input.placeholder = valuePlaceholder;
		})
	}
}