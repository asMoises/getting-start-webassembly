use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn texto() -> String{
    String::from("Bem-vindo ao Web Assembly!")
}

#[wasm_bindgen]
pub fn texto2() -> String{
    String::from("Esta é a página 2!")
}
