function addClothing(event) {
	event.preventDefault();

	let clothingItems = localStorage.getItem('clothingItems') || '[]';
	clothingItems = JSON.parse(clothingItems);

	const originalPrice = +document.querySelector('#clothing-price').value;
	const discount = +document.querySelector('#clothing-discount').value;
	const clothingItem = {
		id: Date.now(),
		clothingType: document.querySelector('#clothing-type').value,
		description: document.querySelector('#clothing-description').value,
		color: document.querySelector('#clothing-color').value,
		price: originalPrice,
		discount,
		imageUrl: document.querySelector('#clothing-image').value
	};

	clothingItems.push(clothingItem);
	localStorage.setItem('clothingItems', JSON.stringify(clothingItems));
	renderClothingItems();
	resetForm();
}

function renderClothingItems() {
	let clothingItems = localStorage.getItem('clothingItems') || '[]';
	clothingItems = JSON.parse(clothingItems);

	const tableBody = document.querySelector('#clothing-table-body');
	tableBody.innerHTML = '';

	for (const clothingItem of clothingItems) {
		const tableRow = document.createElement('tr');
		const finalPrice = clothingItem.price === undefined
			? clothingItem.finalPrice
			: clothingItem.price * (1 - clothingItem.discount / 100);

		const typeCell = document.createElement('td');
		typeCell.textContent = getClothingTypeText(clothingItem.clothingType);

		const descriptionCell = document.createElement('td');
		descriptionCell.textContent = clothingItem.description;

		const colorCell = document.createElement('td');
		colorCell.textContent = clothingItem.color;
		colorCell.style.color = clothingItem.color;

		const priceCell = document.createElement('td');
		priceCell.textContent = finalPrice.toFixed(2);
		priceCell.style.color = getPriceColor(finalPrice);

		const discountCell = document.createElement('td');
		discountCell.textContent = `${clothingItem.discount}%`;

		const imageCell = document.createElement('td');
		const imageElement = document.createElement('img');
		imageElement.src = clothingItem.imageUrl;
		imageElement.alt = `תמונה של ${getClothingTypeText(clothingItem.clothingType)}`;
		imageElement.width = 100;
		imageElement.height = 100;
		imageElement.addEventListener('error', () => {
			imageCell.textContent = 'לא ניתן לטעון את התמונה';
		});
		imageCell.append(imageElement);

		const deleteCell = document.createElement('td');
		const deleteButton = document.createElement('button');
		deleteButton.type = 'button';
		deleteButton.textContent = 'מחיקה';
		deleteButton.className = 'delete-button';
		deleteButton.onclick = function () {
			const itemIndex = clothingItems.indexOf(clothingItem);
			clothingItems.splice(itemIndex, 1);
			localStorage.setItem('clothingItems', JSON.stringify(clothingItems));
			renderClothingItems();
		};
		deleteCell.append(deleteButton);

		tableRow.append(typeCell, descriptionCell, colorCell, priceCell, discountCell, imageCell, deleteCell);
		tableBody.append(tableRow);
	}

	const totalPrice = clothingItems.reduce((sum, item) => {
		const finalPrice = item.price === undefined
			? item.finalPrice
			: item.price * (1 - item.discount / 100);
		return sum + finalPrice;
	}, 0);
	const average = clothingItems.length === 0 ? 0 : totalPrice / clothingItems.length;
	document.querySelector('#clothing-count').textContent = clothingItems.length;
	document.querySelector('#average-price').textContent = average.toFixed(2);
}

function getClothingTypeText(clothingType) {
	const clothingTypeElement = document.querySelector(`#clothing-type option[value="${clothingType}"]`);
	return clothingTypeElement ? clothingTypeElement.textContent : clothingType;
}

function getPriceColor(finalPrice) {
	if (finalPrice <= 200) {
		return 'green';
	}
	if (finalPrice <= 700) {
		return 'blue';
	}
	return 'red';
}

function resetForm() {
	document.querySelector('#clothing-form').reset();
	document.querySelector('#clothing-type').focus();
}

renderClothingItems();
document.querySelector('#clothing-form').addEventListener('submit', addClothing);
