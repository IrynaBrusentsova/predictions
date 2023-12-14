"use strict";
let predictions = [
  {
    id: 1,

    desription: "Все загаданные желания и намеченные планы осуществятся",
  },
  {
    id: 2,

    desription:
      "Пришло время заявить о себе, даже если это кому-то не понравится",
  },
  {
    id: 3,

    desription:
      "Сейчас в Вашей жизни наступает переломный момент, от которого зависит будущее",
  },
  {
    id: 4,

    desription: "Пришло время показать, кем же Вы являетесь на самом деле",
  },
  {
    id: 5,

    desription:
      "На протяжении многих лет Вам будут сопутствовать счастье, здоровье, удача и благополучие",
  },
  {
    id: 6,

    desription:
      "Впереди Вас ждет неожиданное получение денег, которое поправит Ваше пошатнувшееся материальное положение",
  },
  {
    id: 7,

    desription:
      "Пора собирать чемоданы: Вас ждет путешествие в приятной компании",
  },
  {
    id: 8,

    desription:
      "Не огорчайтесь, если дела идут не так, как Вам бы этого хотелось, удача уже на пороге",
  },
  {
    id: 9,

    desription:
      "Ваши отношения с любимым человеком продлятся долго, если Вы не будете рассказывать о них незнакомым людям",
  },
];

// document.write("ol start=0");
// predictions.forEach(prediction=>{

//     document.write(`<li style="list-style:none">${prediction.id} <span style="color:green">${prediction.desription}</span>,</li>`)
// })

// document.write('<ol>');

// const phrases = predictions.map(function (item) {
//   return item.desription;
// });
// console.log(phrases);

// let phrase = predictions[Math.floor(Math.random() * 9)];
// console.log(phrase.desription);
// let text = phrase.desription;

// const body = document.querySelector("body");

// const divBlock = document.createElement("div");
// divBlock.className = "predictions";

// let p = document.createElement("p");
// p.textContent = text;
// divBlock.appendChild(p);
// console.log(divBlock);

// body.appendChild(divBlock);

const button = document.querySelector(".button");
console.log("button");

button.addEventListener("click", () => {
  const phrases = predictions.map(function (item) {
    return item.desription;
  });
  console.log(phrases);

  let phrase = predictions[Math.floor(Math.random() * 9)];
  console.log(phrase.desription);
  let text = phrase.desription;

  const body = document.querySelector("body");

  const divBlock = document.createElement("div");
  divBlock.className = "predictions";

  let p = document.createElement("p");
  p.textContent = text;
  divBlock.appendChild(p);

  body.appendChild(divBlock);

  button.addEventListener("click", () => {
    divBlock.remove();
  });
});
