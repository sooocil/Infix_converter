document.getElementById("convert").addEventListener("click", function () {
  let input = document.getElementById("input").value;
  let output = document.getElementById("output");
  let inpval = input.split("");
  //fstack = final stack
  //pstack = parameter's stack
  //astack = alphabet's stack
  let astack = [],
    pstack = [],
    fstack = [];
  let charlist = [
    "c",
    "b",
    "a",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  for (let char of input) {
    if (/[A-Za-z0-9]/.test(inpval)) {
      console.log("This is an alphabet : " + inpval[i]);
    } else {
      console.log("This is not an alphabet : " + inpval[i]);
      pstack.push(inpval[i]);
    }
  }
  console.log("astack  " + astack);
  console.log("pstack  " + pstack);
  fstack.push(astack);
  fstack.push(pstack);
  console.log("This is an postfix expression : " + fstack);
  output.innerHTML.replace(fstack);
});
