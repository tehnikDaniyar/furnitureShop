export const forInputs = () => {
	let inputs = document.querySelectorAll('input');
	for (let input of inputs) {
		const valuePlaceholder = input.placeholder;

		input.addEventListener('focus', () => {
			input.placeholder = '';
		});

		input.addEventListener('blur', () => {
			console.log('blur');
			input.placeholder = valuePlaceholder;
			// if (input.hasAttribute('data-error')) {
			// 	console.log('data-error');
			// 	if (!/[\w\d]+@[a-z].[a-z]/gi.test(input.value)) {
			// 		console.log('error');
			// 		input.parentElement.innerHTML += "<div class=\"subscribe__error\">error</div>";
			// 	} else {
			// 		console.log('ok');
			// 		input.parentElement.removeChild(input.parentElement.querySelector(".subscribe__error"))
			// 	}
			// }
		})


	}
}