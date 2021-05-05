const inputRef = document.querySelector('#font-size-control');

const textEl = document.querySelector('#text');

inputRef.addEventListener('input', (e) => {

    textEl.style.fontSize = e.currentTarget.value + "px";

})
