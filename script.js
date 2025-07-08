btn = document.querySelector("button");
btn.addEventListener("click", () => {
  append("this is a new feature");
  deleteButton();
});
function append(text) {
  const h2 = document.createElement("h2");
  h2.textContent = text;
  document.body.appendChild(h2);
}
// This is a new feature
function deleteButton() {
  const button = document.createElement("button");
  button.textContent = "Delete me";
  button.addEventListener("click", () => {
    // Remove the last appended h2 element
    const h2s = document.querySelectorAll("h2");
    if (h2s.length > 0) {
      h2s[h2s.length - 1].remove();
    }
    button.remove(); // Optionally remove the button itself after click
  });
  document.body.appendChild(button);
}
