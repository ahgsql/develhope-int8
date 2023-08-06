const { log } = require("console");

function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        resolve(`${player} lost the draw.`);
      }
    });
  });
}
const getResults = async () => {
  try {
    let tinaResult = await luckyDraw("Tina");
    let jorgeResult = await luckyDraw("Jorge");
    let Julienesult = await luckyDraw("Julien");
    console.log(tinaResult, jorgeResult, Julienesult);
  } catch (error) {}
};

getResults();
