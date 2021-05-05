const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output")

const hi = () => {
    output.textContent = input.value || 'незнакомец';
}

input.addEventListener("input", hi);
