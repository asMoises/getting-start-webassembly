/*
 * O pacote por padrão exporta a função "init" que
 * inicializa o carregamento do WASM.
 * Também exporta a função que escrevemos em
 * Rust nomeada "texto"
 */
import init, { texto } from "./pkg/modulo.js";

const eye = document.getElementById("eye");
const eyeSlash = document.getElementById("eye-slash");
const filedPassword = document.getElementById("field-password");
const h1_title = document.getElementById("h1-title");
// Função assíncrona de execução
async function execucao() {
  // Inicializa o carregamento
  await init();

  h1_title.textContent = texto();

  if (eye.style.display === "none") {
    eye.style.display = "block";
    eyeSlash.style.display = "none";
    filedPassword.type = "text";
  } else {
    eye.style.display = "none";
    eyeSlash.style.display = "block";
    filedPassword.type = "password";
  }
}

document.getElementById("btn-login").addEventListener("click", function (e) {
  e.preventDefault();
  location.href = "main-page.html";
});

execucao();
