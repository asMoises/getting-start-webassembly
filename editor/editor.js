const title_test = document.getElementById("test_title");

// Se não tiver compilado o arquivo: use 'editor.wasm'
const arquivo = "./target/wasm32-unknown-unknown/release/editor.wasm";
// const arquivo = 'editor.wasm';

WebAssembly.instantiateStreaming(fetch(arquivo)).then(({ instance }) => {
  const { subtracao } = instance.exports;
  title_test.textContent = "Subtração: " + subtracao(28, 10);
});
