const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
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
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let password1 = document.getElementById("password-1");
let password2 = document.getElementById("password-2");
let msg = document.getElementById("msg");
let arrLength = characters.length;
let length = 15;

function generatePassword() {
  password1.textContent = "";
  password2.textContent = "";

  for (let i = 0, n = characters.length; i < length; ++i) {
    password1.textContent += characters[Math.floor(Math.random() * n)];
    password2.textContent += characters[Math.floor(Math.random() * n)];
  }
}

function copyPassword1() {
  const copyText = password1.textContent;
  navigator.clipboard.writeText(copyText);
  msg.innerHTML = `Copied!`;
}

function copyPassword2() {
  const copyText = password2.textContent;
  navigator.clipboard.writeText(copyText);
  msg.innerHTML = `Copied!`;
}
