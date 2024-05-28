const done = () => {
  document.querySelector("#completed-message").style.visibility = "hidden";
};

const completeTodo = (event) => {
  let checked = event.target.getAttribute("aria-checked");
  if (checked !== "true") {
    event.target.setAttribute("aria-checked", "true");
    document.querySelector("#completed-message").style.visibility = "visible";
    setTimeout(done, 2000);
  } else {
    event.target.setAttribute("aria-checked", "false");
  }
};

const removeTodo = (event) => {
  event.target.setAttribute("aria-checked", "true");
  event.target.parentNode.remove();
};

const addTodo = (event) => {
  event.preventDefault();
  const listItem = document.createElement("li");
  listItem.addEventListener("click", completeTodo);

  const input = document.querySelector("input");
  let inputValue = input.value;
  listItem.innerText = inputValue;

  const button = document.createElement("button");
  button.innerText = "x";
  button.addEventListener("click", removeTodo);
  listItem.append(button);

  const actualList = document.querySelector("ul");
  actualList.appendChild(listItem);

  input.value = "";
};

document.querySelector("form").addEventListener("submit", addTodo);
