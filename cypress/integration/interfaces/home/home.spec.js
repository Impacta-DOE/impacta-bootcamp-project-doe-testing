/// <reference types="cypress" />

import LOC from '../../../support/locators'

describe('Página Inicial', () =>{

    before(()=> {
        cy.acessarSistema();
    })

    it('Validar tempo de carregamento inicial', () => {
        cy.title().should('to.be.eq', 'React App')
    })
    
    describe('Validar principais componentes', () =>{
        it('Cabeçalho ', () => {
            cy.get(LOC.inicial.logotipo).then((logo) => {
                expect(logo).to.have.length(1);
                expect(logo).to.be.visible;
                expect(logo).to.have.class('logo');
            });
                
            cy.get(LOC.inicial.btnCadastro).then((btn_cadastrar) => {
                expect(btn_cadastrar).to.have.length(1);
                expect(btn_cadastrar).to.be.visible;
                expect(btn_cadastrar).to.have.class('btn-cadastrar');
            })

            cy.get(LOC.inicial.btnLogin).then((btn_login) => {
                expect(btn_login).to.have.length(1);
                expect(btn_login).to.be.visible;
                expect(btn_login).to.have.class('btn-login');
            })

        })

        it('Carousel principal', () => {
            cy.get(LOC.inicial.carouselPrincipal).then((carrosel) => {
                expect(carrosel).to.have.length(1);
                expect(carrosel).to.be.visible;
            })
        })

        it('Campanhas e acoes', () => {
            cy.get(LOC.inicial.lblTitulos).first().then((campanha) => {
                expect(campanha).to.have.length(1);
                expect(campanha).to.be.visible;
                expect(campanha).to.have.text('Campanhas e ações recentes');
            })
        
            cy.get(LOC.inicial.btnMais).first().then((btn_mais) => {
                expect(btn_mais).to.have.length(1);
                expect(btn_mais).to.be.visible;
                expect(btn_mais).to.have.attr('value').have.eq('mais');
            })
        
            cy.get(LOC.inicial.carouselCampanha).then((carousel_campanha) => {
                expect(carousel_campanha).to.be.visible;
                expect(carousel_campanha).to.have.length(1);
            })
        })

        it('Organização', () => {
            cy.get(LOC.inicial.btnMais).last().then((btn_mais_ong) => {
                expect(btn_mais_ong).to.have.length(1);
                expect(btn_mais_ong).to.be.visible;
                expect(btn_mais_ong).to.have.attr('value').have.eq('mais');
            })
    
            cy.get(LOC.inicial.lblTitulos).last().then((organizacao) => {
                expect(organizacao).to.have.length(1);
                expect(organizacao).to.be.visible;
                expect(organizacao).to.have.text('Organizações em destaque');
            })
    
            cy.get(LOC.inicial.carouselOng).then((carousel_ong) => {
                expect(carousel_ong).to.be.visible;
                expect(carousel_ong).to.have.length(1);
            })
        })

        it ('Rodapé', () => {
            cy.get(LOC.inicial.btnDoar).then((footer_botao)=> {
                expect(footer_botao).to.have.length(1);
                expect(footer_botao).to.be.visible;
                expect(footer_botao).to.have.attr('value').have.eq('Clique aqui');
            })
            
            cy.get(LOC.inicial.lblTextoFooter).find(`p[class='footer-text']`)
                .then((textos_footer)=> {
                    let textos = ['Ajude a plataforma','a se manter de pé', 
                                    'e mantenha a rede do bem operante'];
                    expect(textos_footer).have.length(3);
                    let eleTextos = textos_footer.toArray().map(el => el.innerText);
                    expect(eleTextos).to.deep.eq(textos);
                })    
    
            cy.get(LOC.inicial.logoFooter).then((imagem_footer) => {
                expect(imagem_footer).to.have.length(1);
                expect(imagem_footer).to.be.visible;
            })
        })
    })

    describe('Validar componentes em dispositivo menores', () => {

        describe('Dispositivo com 1536 x 960', () => {
            it('Campanha', () => {
                cy.viewport(1536, 960)
                cy.get(LOC.inicial.carouselCampanha).invoke('css', 'width')
                .then(str => parseInt(str)).should('be.lt', 1460);
            })

            it('Organizacão', () => {
                cy.viewport(1536, 960)
                cy.get(LOC.inicial.carouselOng).invoke('css', 'width')
                .then(str => parseInt(str)).should('be.lt', 1460);
            })
        })

        describe('Dispositivo com 1280 x 800', () => {
            it('Campanha', () => {
                cy.viewport(1280, 800)
                cy.get(LOC.inicial.carouselCampanha).invoke('css', 'width')
                .then(str => parseInt(str)).should('be.lt', 1214);
            })

            it('Organizacão', () => {
                cy.viewport(1280, 800)
                cy.get(LOC.inicial.carouselOng).invoke('css', 'width')
                .then(str => parseInt(str)).should('be.lt', 1214);
            })
        })

        describe('Dispositivo com 1024 x 768', () => {
            it('Campanha', () => {
                cy.viewport(1024, 768)
                cy.get(LOC.inicial.carouselCampanha).invoke('css', 'width')
                .then(str => parseInt(str)).should('be.lt', 969);
            })

            it('Organizacão', () => {
                cy.viewport(1024, 768)
                cy.get(LOC.inicial.carouselOng).invoke('css', 'width')
                .then(str => parseInt(str)).should('be.lt', 969);
            })
        })

        describe('Dispositivo com 768 x 1024', () => {
            it('Campanha', () => {
                cy.viewport(768, 1024)
                cy.get(LOC.inicial.carouselCampanha).invoke('css', 'width')
                .then(str => parseInt(str)).should('be.lt', 723);
            })

            it('Organizacão', () => {
                cy.viewport(768, 1024)
                cy.get(LOC.inicial.carouselOng).invoke('css', 'width')
                .then(str => parseInt(str)).should('be.lt', 723);
            })
        })
    })
})