// Changing Font Size
function changeFontSize() {
    let fontSize = document.getElementById("fontSize").value;
    document.execCommand("fontSize", false, fontSize);
}

// Changing Font Style
function changeFontStyle() {
    let fontStyle = document.getElementById("fontStyle").value;
    document.execCommand("fontName", false, fontStyle);
}


function changeTextFormat() {
    const format = document.getElementById('textFormat').value;
    if (format) {
        document.execCommand(format, false, null);
        saveState();
    }
}