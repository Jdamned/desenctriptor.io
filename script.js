function processText() {
    const textInput = document.getElementById("text").value;
    const option = document.getElementById("option").value;
    let result = "";

    if (option === "encrypt") {
        result = encrypt(textInput);
    } else if (option === "decrypt") {
        result = decrypt(textInput);
    }

    document.getElementById("result").value = result;
}

function encrypt(text) {
    const encryptedText = text.replace(/e/g, "enter")
                              .replace(/i/g, "imes")
                              .replace(/a/g, "ai")
                              .replace(/o/g, "ober")
                              .replace(/u/g, "ufat");
    return encryptedText;
}

function decrypt(text) {
    const decryptedText = text.replace(/enter/g, "e")
                              .replace(/imes/g, "i")
                              .replace(/ai/g, "a")
                              .replace(/ober/g, "o")
                              .replace(/ufat/g, "u");
    return decryptedText;
}

function copyToClipboard() {
    const resultTextArea = document.getElementById("result");
    resultTextArea.select();
    document.execCommand("copy");
}
