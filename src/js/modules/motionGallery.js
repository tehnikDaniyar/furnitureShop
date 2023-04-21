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

		console.log(furnitureItemsWidth);

	};

	setMouseGalleryStyle();
}