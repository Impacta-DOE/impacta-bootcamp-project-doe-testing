/// <reference types='cypress' />

//MASSA JSON
const PESSOA_PF = require('../payload/add-pessoa-pf.json');
const PESSOA_PJ = require('../payload/add-pessoa-pj.json');
const PESSOA_PF_SEM_DOCUMENTO = require('../payload/add-pessoa-pf-invalido.json');
const PESSOA_PJ_SEM_DOCUMENTO = require('../payload/add-pessoa-pj-invalido.json');

//atributos para a requisição
var post = 'POST';
var pathUrl = '/pessoas';

function salvarPF() {
    return cy.request({
        method: post,
        url: pathUrl,
        failOnStatusCode: false,
        body: PESSOA_PF
    })
}

function salvarPJ() {
    return cy.request({
        method: post,
        url: pathUrl,
        failOnStatusCode: false,
        body: PESSOA_PJ
    })
}

function salvarPfSemDocumento() {
    return cy.request({
        method: post,
        url: pathUrl,
        failOnStatusCode: false,
        body: PESSOA_PF_SEM_DOCUMENTO
    })
 }

 function salvarPjSemDocumento() {
    return cy.request({
        method: post,
        url: pathUrl,
        failOnStatusCode: false,
        body: PESSOA_PJ_SEM_DOCUMENTO
    })
 }

 export {salvarPF, salvarPJ, salvarPfSemDocumento, salvarPjSemDocumento};
