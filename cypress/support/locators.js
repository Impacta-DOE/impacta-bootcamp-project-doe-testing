const elementos = {
    inicial: {
        logotipo: '.logo',
        btnCadastro: '.btn-cadastrar',
        btnLogin: '.btn-login',
        carouselPrincipal: '#container-carousel',
        lblTitulos: 'p#titulo',
        btnMais: '.btn-mais',
        carouselCampanha: 'div#carousel-card div#cards',
        carouselOng: 'div#cards-org  div.col',
        btnDoar: '.btn-doacao',
        lblTextoFooter: '#content-footer',
        logoFooter: 'img#footer-logo'
    },
    login: {
        campoCpf: 'input[name="email"]',
        campoSenha: 'input[name="password"]',
        btnEntrar: '.btn-entrar',
        lnkEsqueceuSenha: '.btn-esqueceu-senha',
        campoEsqueceuSenha: 'input[id="input-cnpj-cpf"]',
        btnSms: '.btn-sms',
        btnEmail: '.btn-email',
        lblEsqueceuSenha: '.text-sms',
        lblMensagem: ''
    },
    cadastro: {
        chkPj: '//label[text()="Sou pessoa juridica"]/../input',
        campoNome: '#input-nome-completo',
        campoDtNascimento: '#date',
        campoSexo: '#selector-sexo',
        campoNacionalidade: 'select[name="nascionalidade"]',
        campoCpfRne: 'input[placeholder="CPF / RNE"]',
        campoEmail: 'input[placeholder="E-mail"]',
        campoTelefone: 'input[placeholder="Telefone"]',
        campoCep: 'input[placeholder="CEP"]',
        campoRua: 'input[placeholder="Rua"]',
        campoNumero: 'input[placeholder="N°"]',
        campoComplemento: 'input[placeholder="Complemento"]',
        campoBairro: '#input-bairro',
        campoEstado: 'select[name="estado"]',
        campoCidade: 'select[name="cidade"]',
        campoSenha: 'input[placeholder="Senha"]',
        campoConfirmarSenha: 'input[placeholder="Confirmar Senha"]',
        btnCadastrar: '#btn-cadastrar'
    }
}

export default elementos;