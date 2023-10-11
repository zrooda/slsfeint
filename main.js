// Refs
const body = document.body;

const button = document.createElement("button");
button.textContent = "Help!";
button.classList.add("sls-button");
button.addEventListener
body.appendChild(button);

const dialog = document.createElement("dialog");
dialog.classList.add("sls-dialog");
body.appendChild(dialog);

const image = document.createElement("img");
image.src = "https://assets.codepen.io/579289/stopwatch.png?format=auto";
image.addEventListener("click", () => {dialog.close();});
dialog.appendChild(image);

// Styling
const styles = document.createElement("style");
style.textContent = `
.sls-button {position: fixed; top: 10px; right: 10px;}
.sls-dialog {display: flex; place-content: center center; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.2);}
.sls-dialog img {max-width: 100%; max-height: 100%}
`;
