const screen = document.getElementById("screen");
const buttons = document.getElementById("buttons");

let valor = "";

buttons.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    const key = event.target.getAttribute("data-key");
    
    if (key === "clear") {
      valor = "";
    } else if (key === "equal") {
      try {
        valor = eval(valor).toString();
      } catch (error) {
        valor = "Error";
      }
    } else {
      valor += key;
    }
    screen.textContent = valor;
  }
});