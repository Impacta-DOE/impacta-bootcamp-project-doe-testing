// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import LOC from './locators'

Cypress.Commands.add('acessarSistema', () =>{
    cy.visit('http://impacta-doe.herokuapp.com');
    cy.wait(100);
})

Cypress.Commands.add('login', () => {
    cy.acessarSistema();
    cy.get(LOC.inicial.btnLogin).click();
})

Cypress.Commands.add('logar', (usuario, senha) => {
    cy.acessarSistema();
    cy.get(LOC.inicial.btnLogin).click();
    cy.get(LOC.login.campoCpf).type(usuario);
    cy.get(LOC.login.campoSenha).type(senha);
    cy.get(LOC.login.btnEntrar).click();
})

Cypress.Commands.add('cadastrar', () =>{
    cy.acessarSistema();
    cy.get(LOC.inicial.btnCadastro).click();
})

Cypress.Commands.add('dadosPessoaisPf', (nome, dtNasc, sexo, nacio, cpfOuRne) => {
    cy.get(LOC.cadastro.campoNome).focus().type(nome);
    cy.get(LOC.cadastro.campoDtNascimento).focus().type(dtNasc);
    cy.get(LOC.cadastro.campoSexo).focus().select(sexo);
    cy.get(LOC.cadastro.campoNacionalidade).focus().select(nacio);
    cy.get(LOC.cadastro.campoCpfRne).focus().type(cpfOuRne);
})

Cypress.Commands.add('dadosContatos', (email, telefone)=> {
    cy.get(LOC.cadastro.campoEmail).focus().type(email);
    cy.get(LOC.cadastro.campoTelefone).focus().type(telefone);
})

Cypress.Commands.add('dadosEndereco', (cep, rua, numero, compl, bairro, estado, cidade) => {
    cy.get(LOC.cadastro.campoCep).focus().type(cep);
    cy.get(LOC.cadastro.campoRua).focus().type(rua);
    cy.get(LOC.cadastro.campoNumero).focus().type(numero);
    cy.get(LOC.cadastro.campoComplemento).focus.type(compl);
    cy.get(LOC.cadastro.campoBairro).focus().type(bairro);
    cy.get(LOC.cadastro.campoEstado).focus.select(estado);
    cy.get(LOC.cadastro.campoCidade).focus().select(cidade);
})

Cypress.Commands.add('dadosSenhas', (senha, confirmaSenha) => {
    cy.get(LOC.cadastro.campoSenha).focus().type(senha);
    cy.get(LOC.cadastro.campoConfirmarSenha).focus().type(confirmaSenha);
})

Cypress.Commands.add('salvarCadastro', () => {
    cy.get(LOC.cadastro.btnCadastrar).click();
})