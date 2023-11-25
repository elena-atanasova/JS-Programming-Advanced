function encodeAndDecodeMessages() {
    let btns = document.getElementsByTagName("button");
    let textareaElement = document.getElementsByTagName("textarea");

    Array.from(btns).forEach((el) => el.addEventListener("click", encodeDecode));

    function encodeDecode(e) {
        if (e.target.textContent === "Encode and send it") {
            let inputText = textareaElement[0].value;
            let encodedText = Array.from(inputText).map(x => String.fromCharCode(x.charCodeAt() + 1)).join('');

            textareaElement[1].value = encodedText;
            textareaElement[0].value = '';

        } else if (e.target.textContent === "Decode and read it") {
            let decodedText =  Array.from(textareaElement[1].value).map(x => String.fromCharCode(x.charCodeAt() - 1)).join('');
            textareaElement[1].value = decodedText;
        }
    }
}