// SELECT ELEMENTS
const addBtn = document.querySelector(".add-btn");
const toDoListContainer = document.querySelector(".todolist-container");
const inputField = document.querySelector(".input-field");

// 3 addEventListeners to add paragraph, to click a line-through and to remove the paragraph
addBtn.addEventListener("click", function () {
  let paragraph = document.createElement("p");
  paragraph.classList.add("p-styling");
  paragraph.innerText = inputField.value;
  toDoListContainer.append(paragraph);
  inputField.value = "";
  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  });
  paragraph.addEventListener("dblclick", function () {
    toDoListContainer.removeChild(paragraph);
  });
});
