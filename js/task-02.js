const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const listAddIngredients = document.querySelector(`#ingredients`);

const addListItems = (arr) => {
    const listArr = arr.map(item => {
        const itemsList = document.createElement('li');
        itemsList.textContent = item;
        return itemsList;
    })
    listAddIngredients.append(...listArr);
}

addListItems(ingredients);