// Refs
const body = document.body;

const dialog = document.createElement("dialog");
dialog.classList.add("sls-dialog");
const container = document.createElement("div");
container.classList.add("sls-container");
dialog.appendChild(container);
const image = document.createElement("img");
image.src = "https://assets.codepen.io/579289/stopwatch2.png?format=auto";
image.addEventListener("click", () => {dialog.removeAttribute("open");});
container.appendChild(image);
body.appendChild(dialog);

const button = document.createElement("button");
button.classList.add("sls-button", "pushable");
button.innerHTML = `
<span class="shadow"></span>
<span class="edge"></span>
<span class="front">Help!</span>
`;
button.addEventListener("click", () => {dialog.setAttribute("open", true);});
body.appendChild(button);

// Styling
const styles = document.createElement("style");
styles.textContent = `
@import url("https://fonts.googleapis.com/css2?family=Playpen+Sans&display=swap");
html, body {width: 100%; height: 100%;}
body {margin: 0; font-family: "Playpen Sans", cursive;}
*, *::before, *::after {box-sizing: border-box;}
.sls-button {position: fixed; top: 10px; right: 10px;}
.sls-dialog {width: 100%; height: 100%; position: fixed; left: 0; top: 0; background-color: rgba(0,0,0,0.4); border: 0; z-index: 1000;}
.sls-container {width: 100%; height: 100%; display: flex; place-content: center center;}
.sls-dialog img {max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 12px;}
.pushable {
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
  transition: filter 250ms;
}
.shadow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: hsl(0deg 0% 0% / 0.25);
  will-change: transform;
  transform: translateY(2px);
  transition:
    transform
    600ms
    cubic-bezier(.3, .7, .4, 1);
}
.edge {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: linear-gradient(
    to left,
    hsl(340deg 100% 16%) 0%,
    hsl(340deg 100% 32%) 8%,
    hsl(340deg 100% 32%) 92%,
    hsl(340deg 100% 16%) 100%
  );
}
.front {
  display: block;
  position: relative;
  padding: 8px 20px;
  border-radius: 12px;
  font-size: 1.1rem;
  color: white;
  background: hsl(345deg 100% 47%);
  will-change: transform;
  transform: translateY(-4px);
  transition:
    transform
    600ms
    cubic-bezier(.3, .7, .4, 1);
}
.pushable:hover {
  filter: brightness(110%);
}
.pushable:hover .front {
  transform: translateY(-6px);
  transition:
    transform
    250ms
    cubic-bezier(.3, .7, .4, 1.5);
}
.pushable:active .front {
  transform: translateY(-2px);
  transition: transform 34ms;
}
.pushable:hover .shadow {
  transform: translateY(4px);
  transition:
    transform
    250ms
    cubic-bezier(.3, .7, .4, 1.5);
}
.pushable:active .shadow {
  transform: translateY(1px);
  transition: transform 34ms;
}
.pushable:focus:not(:focus-visible) {
  outline: none;
}
`;
body.appendChild(styles);
