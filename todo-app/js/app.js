window.onload = function () {
  let txtInput = document.getElementById("label");
  let buttonEl = document.querySelector("#btn-add");
  let listContainer = document.getElementById("list-container");

  buttonEl.addEventListener("click", function (event) {
    event.preventDefault();
    if (txtInput.value.trim() === "") {
      return;
    }
    createElement(txtInput.value);
    txtInput.value = "";
  });

  function createElement(inputValue) {
    let liElement = document.createElement("li");
    liElement.innerText = inputValue;
    liElement.classList.add("list-item");
    liElement.onclick = deleteElement;
    listContainer.appendChild(liElement);
  }

  function deleteElement() {
    this.remove();
  }
};
