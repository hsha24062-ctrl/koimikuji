const fortunes = [
    "大吉",
    "中吉",
    "小吉",
    "凶"
];

const button = document.getElementById("aa");
const result = document.getElementById("ab");

button.addEventListener("click",function () {  
   const randomNunber = Math.floor(Math.random() * fortunes.length);

   result.textContent = fortunes[(randomNunber)]
});