// uso do no_mangle para inserir a função no binario

#[no_mangle]
pub extern fn subtracao(numero_a: u8, numero_b: u8) -> u8{
    numero_a - numero_b
}