const inputField = document.getElementById("inputField");
const listItems = document.getElementById("listItems");

function addTask() {
  if (inputField.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputField.value;
    listItems.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputField.value = "";
  saveElement();
}

listItems.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveElement();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveElement();
    }
  },
  false
);

function saveElement() {
  localStorage.setItem(`listItems`, listItems.innerHTML);
}
function showElement() {
  listItems.innerHTML = localStorage.getItem(`listItems`);
}
showElement();
