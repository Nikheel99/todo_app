function clickOnAddButton() {
  const li = document.createElement("li");
  const inputValue = document.getElementById("input").value;
  const t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "" || inputValue.trim() === "") {
    alert("Please enter your todo");
  } else {
    document.getElementById("list").appendChild(li);
    document.getElementById("input").value = "";
  }

  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  const close = document.getElementsByClassName("close");
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      const div = this.parentElement;
      div.style.display = "none";
    };
  }
}

const list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);
