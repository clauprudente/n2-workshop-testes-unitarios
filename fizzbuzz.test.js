const expect = require('chai');
const fizzbuzz = require('./fizzbuzz')

//Given - dado que 
//Should - deveria que isso
//then - então espere isso

describe('Se o número não for multiplo de 3 ou de 5 ele deve retornar ele mesmo', () => {
    it('Deve retornar 7 quando passado 7', () => {
        const resultado = fizzbuzz(7);

        expect(resultado).to.be.equal(7);
    })

    it('Deve retornar 8 quando passado 8', () => {
        const resultado = fizzbuzz(8);

        expect(resultado).to.be.equal(8)
    })

    it('Se não for multiplo de 3 ou 5, retorna ele mesmo'), () => {
        const resultado= fizzbuzz(3)
        expect(resultado).not.equal(3)
    }

    it('Se for multiplo de 5, retorna Buzz'), () => {
        const resultado = fizzbuzz(10)
        expect(resultado).to.be.equal('Buzz')
    }    
})