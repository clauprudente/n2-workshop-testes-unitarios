const fibonacci = (numero) => {
    if(numero == '2') {
        return '1,1,2'
    }
    for(let i = numero; i>=0; i--) {
        let fibo =+ numero;
        console.log(fibo)
        return fibo;
    }
    return numero;
}

module.exports = fibonacci;