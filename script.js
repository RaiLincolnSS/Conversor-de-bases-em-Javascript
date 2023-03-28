// função para converter de decimal para binário
function decimalParaBinario(num) {
    return num.toString(2);
    }
    
    // função para converter de binário para decimal
    function binarioParaDecimal(num) {
    return parseInt(num, 2);
    }
    
    // função para converter de decimal para octal
    function decimalParaOctal(num) {
    return num.toString(8);
    }
    
    // função para converter de octal para decimal
    function octalParaDecimal(num) {
    return parseInt(num, 8);
    }
    
    // função para converter de decimal para hexadecimal
    function decimalParaHexadecimal(num) {
    return num.toString(16);
    }
    
    // função para converter de hexadecimal para decimal
    function hexadecimalParaDecimal(num) {
    return parseInt(num, 16);
    }
    
    // elemento de entrada
    const input = document.getElementById('input');
    
    // elemento de saída
    const output = document.getElementById('output');
    
    // botão de conversão de decimal para binário
    const btnDecBin = document.getElementById('btn-dec-bin');
    btnDecBin.addEventListener('click', () => {
    const decimal = Number(input.value);
    const binario = decimalParaBinario(decimal);
    output.value = binario;
    });
    
    // botão de conversão de binário para decimal
    const btnBinDec = document.getElementById('btn-bin-dec');
    btnBinDec.addEventListener('click', () => {
    const binario = input.value;
    const decimal = binarioParaDecimal(binario);
    output.value = decimal;
    });
    
    // botão de conversão de decimal para octal
    const btnDecOct = document.getElementById('btn-dec-oct');
    btnDecOct.addEventListener('click', () => {
    const decimal = Number(input.value);
    const octal = decimalParaOctal(decimal);
    output.value = octal;
    });
    
    // botão de conversão de octal para decimal
    const btnOctDec = document.getElementById('btn-oct-dec');
    btnOctDec.addEventListener('click', () => {
    const octal = input.value;
    const decimal = octalParaDecimal(octal);
    output.value = decimal;
    });
    
    // botão de conversão de decimal para hexadecimal
    const btnDecHex = document.getElementById('btn-dec-hex');
    btnDecHex.addEventListener('click', () => {
    const decimal = Number(input.value);
    const hexadecimal = decimalParaHexadecimal(decimal);
    output.value = hexadecimal;
    });
    
    // botão de conversão de hexadecimal para decimal
    const btnHexDec = document.getElementById('btn-hex-dec');
    btnHexDec.addEventListener('click', () => {
    const hexadecimal = input.value;
    const decimal = hexadecimalParaDecimal(hexadecimal);
    output.value = decimal;
    });

    // adicionar animação na entrada
    input.addEventListener('input', () => {
    input.style.borderColor = '#008CBA';
    });

    input.addEventListener('blur', () => {
    input.style.borderColor = '#ccc';
    });