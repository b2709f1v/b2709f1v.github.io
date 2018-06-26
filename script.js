function init() {
  var a = randomInteger(6, 9);
  var c = randomInteger(11, 14);
  var b = c - a;

  document.getElementById("num1").innerHTML = a;
  document.getElementById("num2").innerHTML = b;

  var arrows = document.querySelectorAll(".arrow");
  arrows[0].style.display = "block";

  var className = "arrow-";
  arrows[0].classList.add(className + a);
  var inputNum1 = document.getElementById("num1-input");
  inputNum1.addEventListener("input", getN1);

  var inputNum2 = document.getElementById("num2-input");
  inputNum2.addEventListener("input", getN2);

  var inputSum = document.getElementById("sum-input");
  inputSum.addEventListener("input", getSum);

  function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
  }

  function getN1() {
    var aInput = document.getElementById("num1-input").value;
    if (aInput == a) {
      inputNum1.readOnly = true;
      inputNum1.style.border = "none";
      inputNum1.style.color = "black";
      document.querySelector(".num1").style.backgroundColor = "transparent";
      arrows[1].style.display = "block";
      arrows[1].classList.add(className + b);
    } else {
      document.querySelector(".num1").style.backgroundColor = "yellow";
      inputNum1.style.color = "red";
    }
  }

  function getN2() {
    var bInput = document.getElementById("num2-input").value;
    console.log(bInput);
    if (bInput == b) {
      inputNum2.readOnly = true;
      inputNum2.style.border = "none";
      inputNum2.style.color = "black";
      document.querySelector(".num2").style.backgroundColor = "transparent";
      document.querySelector(".sum").style.display = "none";
      inputSum.readOnly = false;
      inputSum.style.display = "inline-block";
    } else {
      document.querySelector(".num2").style.backgroundColor = "yellow";
      inputNum2.style.color = "red";
    }
  }

  function getSum() {
    var sumInput = document.getElementById("sum-input").value;
    console.log(sumInput);
    if (sumInput == c) {
      inputSum.readOnly = true;
      inputSum.style.border = "none";
      inputSum.style.color = "black";
    } else {
      inputSum.style.color = "red";
    }
  }
}
