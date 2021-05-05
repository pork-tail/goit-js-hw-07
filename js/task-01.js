const categoriesElem = () => {
    const categories = document.querySelectorAll(".item");
    console.log(`В списке ${categories.length} категории`);

    categories.forEach(elem => {
        console.log(`Категория: ${elem.querySelector("h2").textContent}`);
        console.log(`В категории: ${elem.querySelectorAll("li").length} элементов`);
    });

}
categoriesElem();