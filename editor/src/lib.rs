use core::slice::from_raw_parts_mut;
use std::alloc::{alloc,Layout};
use std::mem;


#[no_mangle]
extern fn acumular(ponteiro: *mut u8, comprimento: usize) -> i32 {
    let fatia = unsafe { from_raw_parts_mut(ponteiro as *mut u8, comprimento) };
    let mut soma = 0;
    for i in 0..comprimento {
        soma = soma + fatia[i];
    }
    soma as i32
}

#[no_mangle]
extern fn malloc(comprimento: usize) -> *mut u8 {
    let alinhamento = mem::align_of::<usize>();
    if let Ok(layout) = Layout::from_size_align(comprimento, alinhamento) {
        unsafe {
            if layout.size() > 0 {
                let ponteiro = alloc(layout);
                if !ponteiro.is_null() {
                    return ponteiro;
                }
            } else {
                return alinhamento as *mut u8;
            }
        }
    }
    std::process::abort()
}

#[no_mangle]
extern fn criar_memoria_inicial(){
    let fatia: &mut [u8];
    unsafe {
        // começa em 5 e vai ate 15, pois tem 10 posições
        fatia = from_raw_parts_mut::<u8>(5 as *mut u8, 10);
    }
    // na posição zero, qu eé 5, está o valor 85
    fatia[0]= 85
}

// uso do no_mangle para inserir a função no binario
#[no_mangle]
pub extern fn subtracao(numero_a: u8, numero_b: u8) -> u8{
    numero_a - numero_b
}