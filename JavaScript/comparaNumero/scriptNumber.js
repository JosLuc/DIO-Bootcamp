function comparaNum(num1, num2) {
    const FIRST_PART = comparacao(num1, num2);
    const SECOND_PART = somaCompara(num1, num2);

    return `${FIRST_PART} ${SECOND_PART}`
};

function comparacao(num1, num2) {
    let saoIguais = '';

    if (num1 !== num2) {
        saoIguais = 'não';
    }

    return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`
};

function somaCompara(num1, num2) {

    let result10 = 'menor';
    let result20 = 'menor';

    const SOMA = num1 + num2;
    const COMPARACAO_10 = SOMA > 10;
    const COMPARACAO_20 = SOMA > 20;

    if (COMPARACAO_10) {
        result10 = 'maior';
    }

    if (COMPARACAO_20) {
        result20 = 'maior';
    }

    return `Sua soma é ${SOMA}, que é ${result10} que 10 e ${result20} que 20.`
};

console.log(comparaNum(1, 2));