// Refs
const body = document.body;

const dialog = document.createElement("dialog");
dialog.classList.add("sls-dialog");
const container = document.createElement("div");
container.classList.add("sls-container");
dialog.appendChild(container);
const image = document.createElement("img");
image.src = "https://assets.codepen.io/579289/stopwatch.png?format=auto";
image.addEventListener("click", () => {dialog.removeAttribute("open");});
container.appendChild(image);
body.appendChild(dialog);

const button = document.createElement("button");
button.textContent = "Help!";
button.classList.add("sls-button");
button.addEventListener("click", () => {dialog.setAttribute("open", true);});
body.appendChild(button);

// Styling
const styles = document.createElement("style");
styles.textContent = `
html, body {width: 100%; height: 100%;}
body {margin: 0;}
*, *::before, *::after {box-sizing: border-box;}
.sls-button {position: fixed; top: 10px; right: 10px;}
.sls-dialog {width: 100%; height: 100%; position: fixed; left: 0; top: 0; background-color: rgba(0,0,0,0.2); border: 0; z-index: 1000;}
.sls-container {width: 100%; height: 100%; display: flex; place-content: center center;}
.sls-dialog img {max-width: 100%; max-height: 100%; object-fit: contain;}
`;
body.appendChild(styles);
