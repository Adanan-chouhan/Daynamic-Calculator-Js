const btnCont = document.querySelector(".buttons-container");
const input = document.getElementById("input");

const btnArr = [
  "C",
  "%",
  "/",
  "CL",
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "+/-",
  "0",
  ".",
  "=",
];
const operators = ["%", "/", "*", "-", "+"];

function createBtn(arr) {
  const fragment = document.createDocumentFragment();

  arr.forEach((el) => {
    const btn = document.createElement("button");
    btn.textContent = el;
    btn.classList.add("btn");
    fragment.appendChild(btn);
  });
  btnCont.appendChild(fragment);
}
createBtn(btnArr);

function calculation(val) {
  const inputvalue = input.value.split("");

  operators.includes(inputvalue.at(-1)) && operators.includes(val)
    ? ""
    : (input.value += val);

    if (val === "=") {
        showResult(input.value.slice(0, -1));
    }else if(val === "CL"){
        input.value = "";
    }else if(val === "C"){
        const cl = input.value.slice(0, -2);
        input.value = cl;
    };
};

function showResult(value) {
  try {
    input.value = eval(value);
  } catch (error) {
    new Error("oops we got Error🙃");
  }
}

function calfunc(event) {
  console.dir(event);
  if ((event.target.localName = "button")) {
    calculation(event.target.textContent);
  }
}

btnCont.addEventListener("click", calfunc);