/// <reference types="cypress" />

import LOC from '../../../support/locators'
import '../../../support/commands'

describe('Cadastrar pessoa física', () => {

    beforeEach(() =>{
        cy.cadastrar();
    })

    it('Cadastar pessoa física com sucesso', () => {
        cy.dadosPessoaisPf()
    })

})