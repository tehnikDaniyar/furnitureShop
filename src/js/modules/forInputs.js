export const forInputs = () => {
	let inputs = document.querySelectorAll('input');
	for (let input of inputs) {
		const valuePlaceholder = input.placeholder;

		input.addEventListener('focus', function () {
			this.placeholder = '';
		});

		input.addEventListener('blur', function () {
			console.log('blur');
			this.placeholder = valuePlaceholder;
			if (this.hasAttribute('data-error')) {
				console.log('data-error');
				// if (!/[\w\d]+@[a-z].[a-z]/gi.test(this.value)) {
				// 	console.log('error');
				// 	this.parentElement.innerHTML += "<div class=\"subscribe__error\">error</div>";
				// } else {
				// 	console.log('ok');
				// 	this.parentElement.removeChild(this.parentElement.querySelector(".subscribe__error"))
				// }
			}
		})


	}
}