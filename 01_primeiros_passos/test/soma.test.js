let expect = require('chai').expect;

let soma = require('../src/soma');

describe('Deve retornar a soma de dois números', () => {
    it('A soma deve ser uma função', () => {
        expect(soma).to.be.a('function')
    })

    it('A soma deve retornar 10 quando passamos os parâmetros 4 e 6', () => {
        expect(soma(4,6)).to.be.equal(10);
    })

    it('A soma deve retornar 7 quando passamos os parâmetros 4 e 3', () => {
        expect(soma(4,3)).to.be.equal(7);
    })

    it('A soma deve retornar um erro quando não passamos parâmetros', () => {
        expect(soma()).to.be.an('error');
    })

    it('A soma deve retornar um erro quando passamos mais do que dois parâmetros', () => {
        expect(soma(3,5,7,9)).to.be.an('error');
    })

    it('A soma deve retornar um erro quando o usuário passa uma letra', () => {
        expect(soma('banana')).to.be.an('error');
    })

})