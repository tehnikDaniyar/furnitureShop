export const motionGallery = () => {
	const furniture = document.querySelector(".furniture__body");
	const furnitureItems = document.querySelector(".furniture__items");
	const furnitureColumns = document.querySelectorAll(".furniture__column");

	const motionSpeed = furniture.dataset.speed;

	let positionX = 0;
	let coordXprocent = 0;

	function setMouseGalleryStyle() {
		let furnitureItemsWidth = 0;

		furnitureColumns.forEach(column => {
			furnitureItemsWidth += column.offsetWidth;
		});

		let furnitureDifferent = furnitureItemsWidth - furniture.offsetWidth;
		const distX = Math.floor(coordXprocent - positionX);

		positionX = positionX + (distX * motionSpeed);
		let position = furnitureDifferent / 200 * positionX;

		furnitureItems.style.cssText = `transform: translate3d(${-position}px,0,0);`;

		if (Math.abs(distX) > 0) {
			requestAnimationFrame(setMouseGalleryStyle)
		} else {
			furniture.classList.remove("_init");
		}
	};

	furniture.addEventListener('mousemove', (e) => {

	})

	// setMouseGalleryStyle();

}