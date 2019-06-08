let expect = require('chai').expect;

let soma = require('../src/soma');

describe('Deve retornar a soma de dois números', () => {
    it('A soma deve ser uma função', () => {
        expect(soma).to.be.a('function')
    })

    it('A soma deve retornar 10 quando passamos os parâmetros 4 e 6', () => {
        expect(soma(4,6)).to.be.equal(10);
    })
})