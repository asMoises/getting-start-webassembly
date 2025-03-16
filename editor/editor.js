// **************** JS Area
let memoria = null;
const comprimento = 10;
const ponteiro = 5;

function criar_memoria_inicial(comprimento, ponteiro) {
  memoria = new Array(comprimento).fill(0);
  memoria[ponteiro] = 85;
}

criar_memoria_inicial(comprimento, ponteiro);
console.log("Memoria using just JS: \n" + memoria);

// ********* Acess WebAssembly using JS
const arquivo = "./target/wasm32-unknown-unknown/release/editor.wasm";

WebAssembly.instantiateStreaming(fetch(arquivo)).then((wasm) => {
  const { instance } = wasm;
  const { subtracao, criar_memoria_inicial, memory, malloc, acumular } =
    instance.exports;

  criar_memoria_inicial();
  const arraMemoria = new Uint8Array(memory.buffer, 0).slice(0, 10);
  console.log("Memory Aceess by WASM: \n" + arraMemoria);
  console.log(subtracao(28, 10));

  const jsLista = Uint8Array.from([20, 50, 80]);
  const comprimento = jsLista.length;
  const wasmListaPonteiro = malloc(comprimento);

  const wasmLista = new Uint8Array(
    memory.buffer,
    wasmListaPonteiro,
    comprimento
  );

  wasmLista.set(jsLista);
  const somaEntreItensDaLista = acumular(wasmListaPonteiro, comprimento);
  console.log(somaEntreItensDaLista);
});
