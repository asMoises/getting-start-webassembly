import init, { texto2 } from "./pkg/modulo.js";

const h1_title = document.getElementById("h1-title2");

async function execucao() {
  await init();

  h1_title.textContent = texto2();
}

execucao();
