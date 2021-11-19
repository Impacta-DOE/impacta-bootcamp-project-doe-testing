/// <reference types="cypress" />

import LOC from '../../../support/locators'
import '../../../support/commands'

describe('Login', () => {

    beforeEach(()=> {
        cy.acessarSistema();
    })

    it('Preencher login com sucesso', ()=> {
        cy.fixture('loginData').then((data) => {
            cy.logar(data.usuario, data.senha)
        })
    })

    it('Preencher login sem cpf', ()=> {
        cy.fixture('loginData').then((data) => {
            cy.get(LOC.inicial.btnLogin).click();
            cy.get(LOC.login.campoSenha).type(data.senha);
            cy.get(LOC.login.btnEntrar).click();
            //expect(LOC.login.lblMensagem).have.text('mesangem de erro');
        })
    })

    it('Preencher login sem senha', () => {
        cy.fixture('loginData').then((data) => {
            cy.get(LOC.inicial.btnLogin).click();
            cy.get(LOC.login.campoCpf).type(data.usuario);
            cy.get(LOC.login.btnEntrar).click();
            //expect(LOC.login.lblMensagem).have.text('mesangem de erro');
        })
    })    

    it('Acessar login sem preenchimento', () => {
        cy.get(LOC.inicial.btnLogin).click();
        cy.get(LOC.login.btnEntrar).click();
        //expect(LOC.login.lblMensagem).have.text('mesangem de erro');
    })

    it('Recuperar senha com cpf e opcao sms', () => {
        cy.fixture('loginData').then((data) => {
            cy.get(LOC.inicial.btnLogin).click();
            cy.get(LOC.login.lnkEsqueceuSenha).click();
            cy.get(LOC.login.campoEsqueceuSenha).focus().type(data.usuario);
            cy.get(LOC.login.btnSms).click();
            cy.get(LOC.login.lblEsqueceuSenha).invoke('text').then((mensagem) => {
                expect(mensagem).to.be.eq(data.mensagemSms)
            })
        })
    })

    it('Recuperar senha com cpf e opcao email', () => {
        cy.fixture('loginData').then((data) => {
            cy.get(LOC.inicial.btnLogin).click();
            cy.get(LOC.login.lnkEsqueceuSenha).click();
            cy.get(LOC.login.campoEsqueceuSenha).focus().type(data.usuario);
            cy.get(LOC.login.btnEmail).click()
            cy.get(LOC.login.lblEsqueceuSenha).invoke('text').then((mensagem) => {
                expect(mensagem).to.be.eq(data.mensagemEmail)
            })
        })
    })

    it('Recuperar senha sem informar o cpf com a opção sms', () => {
        cy.fixture('loginData').then((data) => {
            cy.get(LOC.inicial.btnLogin).click();
            cy.get(LOC.login.lnkEsqueceuSenha).click();
            cy.get(LOC.login.btnSms).click()
            //cy.get(LOC.login.lblEsqueceuSenha).invoke('innerText').then((mensagem)=> {
            //    expect(mensagem).to.be.eq("Por favor! preencher o campo cpf/cnpj")
            //})
        })
    })

    it('Recuperar senha sem informar o cpf com a opção email', () => {
        cy.fixture('loginData').then((data) => {
            cy.get(LOC.inicial.btnLogin).click();
            cy.get(LOC.login.lnkEsqueceuSenha).click();
            cy.get(LOC.login.btnEmail).click()
            //cy.get(LOC.login.lblEsqueceuSenha).invoke('innerText').then((mensagem)=> {
            //    expect(mensagem).to.be.eq("Por favor! preencher o campo cpf/cnpj")
            //})
        })
    })
})