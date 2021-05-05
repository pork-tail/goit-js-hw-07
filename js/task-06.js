const inputRef = document.querySelector("#validation-input");

const addBorder = function(event) {

    inputRef.classList.add('invalid');

    switch (event.currentTarget.value.length) {
        case Number(event.target.dataset.length):
            inputRef.classList.replace("invalid", "valid");
            break;
        case empty:
            input.classList.remove("invalid");
            break;
    }
}

inputRef.addEventListener('input', addBorder);

