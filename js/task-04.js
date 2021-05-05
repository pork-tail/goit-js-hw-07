let totalValue = 0;
const incrementBtn = document.querySelector('[data-action="increment"]')
const decrementBtn = document.querySelector('[data-action="decrement"]')
const counter = document.querySelector('span')

const increment = () => {
    totalValue += 1;
    counter.textContent = totalValue ;
}

const decrement = () => {
    totalValue  -= 1;
    counter.textContent = totalValue ;
}

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);