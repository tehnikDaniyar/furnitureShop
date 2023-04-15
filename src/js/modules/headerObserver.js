export const headerObserver = () => {
	//==========for header observer=============
	let header = document.querySelector('.header');

	function callback(entries, observer) {
		if (entries[0].isIntersecting) {
			entries[0].target.classList.remove("_scroll");
		} else {
			entries[0].target.classList.add("_scroll");
		}
	}

	const headerObserver = new IntersectionObserver(callback);
	headerObserver.observe(header);
};