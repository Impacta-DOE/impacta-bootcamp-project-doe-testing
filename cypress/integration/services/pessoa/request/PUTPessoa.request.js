/// <reference types='cypress' />

const PESSOA                    = require('../payload/atualiza-pessoa.json');
const PESSOA_DADOS_INVALIDO     = require('../payload/atualiza-dados-invalido.json');

var put = 'PUT';

function atualizaPessoa(idPessoa) {
    return cy.request({
        method: put,
        url: `/pessoas/${idPessoa}`,
        failOnStatusCode: false,
        body: PESSOA
    })
}

function atualizaDadosInvalido(idPessoa) {
    return cy.request({
        method: put,
        url: `/pessoas/${idPessoa}`,
        failOnStatusCode: false,
        body: PESSOA_DADOS_INVALIDO
    })
}

export {atualizaPessoa, atualizaDadosInvalido};