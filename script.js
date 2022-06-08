const a = document.querySelector("#op1");
const b = document.querySelector("#op2");
const op = document.querySelector("#operador");
const calculate = document.querySelector("#calculate");
const result = document.querySelector("#result");

calculate.addEventListener('click', () => {
  if (op.value === 'soma') {
    result.innerHTML = `${a.value} + ${b.value} = ${Number(a.value) + Number(b.value)}`;
  } else if (op.value === 'subtracao') {
    result.innerHTML = `${a.value} - ${b.value} = ${Number(a.value) - Number(b.value)}`;
  } else if (op.value === 'multiplicacao') {
    result.innerHTML = `${a.value} * ${b.value} = ${Number(a.value) * Number(b.value)}`;
  } else if (op.value === 'divisao') {
    result.innerHTML = `${a.value} / ${b.value} = ${Number(a.value) / Number(b.value)}`;
  }
})
