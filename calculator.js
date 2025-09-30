function appendValue(val) {
  document.getElementById("result").value += val;
}

function clearResult() {
  document.getElementById("result").value = "";
}

function calculate() {
  try {
    document.getElementById("result").value = eval(document.getElementById("result").value);
  } catch (e) {
    alert("Invalid Expression");
  }
}

// 🎯 Keyboard support
document.addEventListener("keydown", function(event) {
  const key = event.key;
  const validKeys = "0123456789+-*/.";

  if (validKeys.includes(key)) {
    appendValue(key);
  } else if (key === "Enter" || key === "=") {
    calculate();
  } else if (key === "Backspace") {
    let current = document.getElementById("result").value;
    document.getElementById("result").value = current.slice(0, -1);
  } else if (key.toLowerCase() === "c") {
    clearResult();
  }
});
