
// Primeira solução
function verificaPalindrimo(string) {
    if(!string) return false;

    return string.split('').reverse().join('') === string;
}

verificaPalindrimo('ovo');

// Segunda solução

function verificaPalindrimo2(string) {
    if(!string) return;

    for(let i= 0; i < string.lenght / 2; i++) {
        if(string[i] !== string[string.lenght] - 1 - i) {
            return false;
        }
    }

    return true;
}

verificaPalindrimo2('ana');