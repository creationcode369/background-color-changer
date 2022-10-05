const colors = ['pink', 'blue', 'red', 'green', 'purple', 'violet', 'yellow', 'cyan', 'gold', 'magenta', 'teal'];

function randColor() {
    var random = Math.floor(Math.random() * colors.length);
    const body = document.body;
    body.style.backgroundColor = colors[random];
}