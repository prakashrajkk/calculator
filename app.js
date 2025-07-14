const btn = document.querySelectorAll("button"); 
const input = document.querySelector("input");

for (let button of btn) {
  button.addEventListener("click", () => {
    const v = button.textContent;

    if (v === "C") {
      input.value = "";
    } else if (v === "=") {
      try {
        input.value = eval(input.value); 
      } catch {
        input.value = "Error";
      }
    } else {
      input.value += v;
    }
  });
}
